import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <footer className="footer fix bottom-0 bg-gray-800 text-white p-4 overflow-hidden">
      <Box sx={{ flexGrow: 1 }} className="w-full">
        <AppBar position="static" sx={{ top: "auto", bottom: 0 }}>
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "left",
              width: "90%",
              paddingX: 2,
              gap: 4,
            }}
          >
            {/* About Section */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold">About Rocky</h2>
              <p className="mt-2 text-gray-400 max-w-md">
                Rocky provides high-quality auto parts for all major vehicle
                brands. We guarantee reliability and performance.
                <br />
                
              </p>
            </div>

            {/* Contact Section */}
            <div className="flex-1 text-center">
              <h2 className="text-xl font-semibold">Contact Us</h2>
              <p className="mt-2 text-gray-400">
                Email: support@rockyautoparts.com
              </p>
              <p className="text-gray-400">Phone: +1 (234) 567-890</p>
              <div className="flex justify-center space-x-[20px] mt-8">
                <a
                  href="https://www.instagram.com"
                  className="text-gray-400 hover:text-white"
                  title="Instagram"
                
                >
                  <InstagramIcon /> 
                  {/* Instagram */}
                </a>
                <a
                  href="https://www.twitter.com"
                  className="text-gray-400 hover:text-white"
                  title="Twitter"
                >
                  <TwitterIcon /> 
                  {/* Twitter */}
                </a>
                <a
                  href="https://wa.me/1234567890"
                  className="text-gray-400 hover:text-white"
                  title="WhatsApp"
                >
                  <WhatsAppIcon />
                  {/* WhatsApp */}
                </a>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="flex-1 text-right ">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} 
                Rocky Auto Parts. All rights reserved.
                
              </p>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </footer>
  );
};
export default Footer;
