import React from "react";

function Footer() {
  return (
    <footer className="bg-green-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between py-10">
          <div className="basic-6/12 text-4xl font-bold">
            <p>
              Let&apos;s automate <br />
              together.
            </p>
          </div>
          <div className="basic-6/12">
            <p>Email: hello@sethee.com</p>
            <p>Social Media</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
