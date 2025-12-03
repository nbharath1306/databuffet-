-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users Table (Extends Supabase Auth)
create table public.users (
  id uuid references auth.users not null primary key,
  email text not null,
  full_name text,
  phone_number text,
  college_name text,
  target_role text check (target_role in ('Data Eng', 'AI', 'Analyst')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Jobs Table
create table public.jobs (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  company text not null,
  location text not null,
  source_link text not null,
  description text,
  tags text[],
  is_active boolean default false,
  requires_visa_sponsorship boolean default true,
  posted_date timestamp with time zone default timezone('utc'::text, now()) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Mentorship Sessions Table
create table public.mentorship_sessions (
  id uuid default uuid_generate_v4() primary key,
  topic text not null,
  host_name text not null,
  date_time timestamp with time zone not null,
  zoom_link text, -- Protected, only visible to registered users
  max_attendees int default 20,
  current_attendees int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS Policies (Row Level Security)
alter table public.users enable row level security;
alter table public.jobs enable row level security;
alter table public.mentorship_sessions enable row level security;

-- Public read access for active jobs
create policy "Public jobs are viewable by everyone"
  on public.jobs for select
  using ( is_active = true );

-- Admin read/write access (assuming admin role or specific user ID)
-- For simplicity in this MVP, we might handle admin checks in the API or via a specific admin flag in users table.
