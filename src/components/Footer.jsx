import { RiFacebookBoxFill, RiInstagramFill, RiTwitterFill } from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center py-4 border-t-2">
        <div className="flex space-x-6 mb-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Our Facebook Page"
          >
            <RiFacebookBoxFill />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Our Twitter Page"
          >
            <RiTwitterFill />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Our Instagram Page"
          >
            <RiInstagramFill />
          </a>
        </div>
        <p className="text-sm">&copy; 2025 VastuSpaze. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
