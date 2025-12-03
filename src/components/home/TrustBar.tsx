export function TrustBar() {
    const companies = [
        { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
        { name: "Volvo", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Volvo_Iron_Mark_Black.svg" },
        { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
        { name: "Klarna", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Klarna_Logo_black.svg" },
        { name: "Ericsson", logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Ericsson_logo.svg" },
    ]

    return (
        <div className="py-12 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
                    Mentors & Alumni from Top Global Companies
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company) => (
                        <img
                            key={company.name}
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="h-8 md:h-10 w-auto object-contain"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
