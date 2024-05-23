import { IoMdClose } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import {
  IoIosArrowBack,
  IoMdDownload,
  IoIosCloudUpload,
  IoIosHelp,
  IoIosDocument,
} from "react-icons/io";
import { CiLocationOn, CiShare2 } from "react-icons/ci";
import {
  FaCheckCircle,
  FaUser,
  FaArrowLeft,
  FaChevronLeft,
  FaFacebook,
  FaInstagram,
  FaChevronRight,
  FaArrowRight,
  FaRegFilePdf,
  FaFileWord,
} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { RiMenu4Fill, RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

interface IconProps {
  type: string;
  size: number;
  color?: string;
}

const Icons = ({ type, size, color }: IconProps) => {
  return (
    <div className="text-white ">
      {
        {
          share: <CiShare2 size={size} color={color} />,
          document: <IoIosDocument size={size} color={color} />,
          word: <FaFileWord size={size} color={color} />,
          pdf: <FaRegFilePdf size={size} color={color} />,
          location: <CiLocationOn size={size} color={color} />,
          facebook: <FaFacebook size={size} color={color} />,
          instagram: <FaInstagram size={size} color={color} />,
          twitter: <BsTwitterX size={size} color={color} />,
          leftQuote: <RiDoubleQuotesL size={size} color={color} />,
          rightQuote: <RiDoubleQuotesR size={size} color={color} />,
          left: <FaChevronLeft size={size} color={color} />,
          right: <FaChevronRight size={size} color={color} />,
          menu: <RiMenu4Fill size={size} color={color} />,
          user: <FaUser size={size} color={color} />,
          check: <FaCheckCircle size={size} color={color} />,
          help: <IoIosHelp size={size} color={color} />,
          back: <IoIosArrowBack size={size} color={color} />,
          upload: <IoIosCloudUpload size={size} color={color} />,
          close: <IoMdClose size={size} color={color} />,
          next: <MdNavigateNext size={size} color={color} />,
          download: <IoMdDownload size={size} color={color} />,
        }[type]
      }
    </div>
  );
};

export default Icons;
