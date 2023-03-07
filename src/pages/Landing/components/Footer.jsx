import usaFlag from "../../../../assets/usa_flag.png";
import twitter_icon from "../../../../assets/twitter_icon.svg";
import instagram_icon from "../../../../assets/instagram_icon.svg";
import facebook_icon from "../../../../assets/facebook_icon.svg";
import youtube_icon from "../../../../assets/youtube_icon.svg";
import discord_main_logo from "../../../../assets/discord_main_logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0b0d21] text-white p-10">
      <div className="flex flex-row justify-around">
        <div>
          <p className="text-[#5865f2] text-5xl font-bold">IMAGINE A PLACE</p>
          <div className="flex flex-row pt-5">
            <img src={usaFlag} alt="usaFlag" className="w-8 mr-3" />
            English, USA
          </div>
          <ul className="logos flex flex-row space-x-5 mt-5">
            <li>
              <img src={twitter_icon} alt="twitter_icon" />
            </li>
            <li>
              <img src={instagram_icon} alt="instagram_icon" />
            </li>
            <li>
              <img src={facebook_icon} alt="facebook_icon" />
            </li>
            <li>
              <img src={youtube_icon} alt="youtube_icon" />
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-around w-1/2">
          <ul className="list-none flex flex-col space-y-5">
            <li className="text-[#5865f2]">Product</li>
            <li>Downlaod</li>
            <li>Nitro</li>
            <li>Status</li>
          </ul>
          <ul className="list-none flex flex-col space-y-5">
            <li className="text-[#5865f2]">Company</li>
            <li>About</li>
            <li>Jobs</li>
            <li>Branding</li>
            <li>Newsroom</li>
          </ul>
          <ul className="list-none flex flex-col space-y-5">
            <li className="text-[#5865f2]">Resources</li>
            <li>College</li>
            <li>Support</li>
            <li>Safety</li>
            <li>Blog</li>
            <li>Feedback</li>
            <li>Develops</li>
            <li>StreamKit</li>
          </ul>
          <ul className="list-none flex flex-col space-y-5">
            <li className="text-[#5865f2]">Policies</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Guidelines</li>
            <li>Acknowledgements</li>
            <li>Licenses</li>
            <li>Moderation</li>
          </ul>
        </div>
      </div>
      <div className="border border-[#5865f2] m-5" />
      <div></div>
      <div className="p-5 flex justify-between">
        <img src={discord_main_logo} alt="discord_logo" />
        <button className="py-2 px-4 bg-[#5865f2] rounded-3xl">Signup</button>
      </div>
    </footer>
  );
};

export default Footer;
