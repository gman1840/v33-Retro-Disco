
import "./globals.css";

export const metadata = {
  title: "Dana Point Disco",
  description: "Silent Disco Rentals in Orange County & North SD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-ink">
        <header className="border-b border-black/5 bg-cream">
          <nav className="container h-14 flex items-center justify-between">
            <div className="font-semibold text-xl text-[#C54134]">Dana Point Disco</div>
            <ul className="flex gap-6 text-[15px]">
              <li><a href="#" className="hover:opacity-70">Home</a></li>
              <li><a href="#packages" className="hover:opacity-70">Packages</a></li>
              <li><a href="#what" className="hover:opacity-70">What’s a Silent Disco?</a></li>
              <li><a href="#quote" className="hover:opacity-70">Request a Quote</a></li>
              <li><a href="#about" className="hover:opacity-70">About Us</a></li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="mt-16 pb-12" />
      </body>
    </html>
  );
}
