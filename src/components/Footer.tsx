const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-opensans">
          © {currentYear} Solih Mirhalilov. All rights reserved.
        </p>
        <p className="text-sm text-primary-foreground/80 mt-2">
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;
