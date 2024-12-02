import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoPinterest,
  IoLogoTwitter,
} from "react-icons/io5/index.js";
import Link from "next/link";

const Share = ({
  title,
  description,
  slug,
  className,
}: {
  title: string;
  description?: string;
  slug: string;
  className?: string;
}) => {
const base_url = "https://www.sagarnildas.com";

  return (
    <ul className={className}>
      <li className="inline-block" style={{ marginRight: '10px' }}>
        <Link
          aria-label="facebook share button"
          href={`https://facebook.com/sharer/sharer.php?u=${base_url}/blogs/${slug}`}
          target="__blank"
          rel="noreferrer noopener"
        >
          <IoLogoFacebook style={{ color: '#3b5998' }}/>
        </Link>
      </li>
      <li className="inline-block" style={{ marginRight: '10px' }}>
        <Link
          aria-label="twitter share button"
          href={`https://twitter.com/intent/tweet/?text=${encodeURIComponent(title)}&url=${encodeURIComponent(base_url + '/blogs/' + slug)}`}
          target="__blank"
          rel="noreferrer noopener"
        >
          <IoLogoTwitter style={{ color: '#1da1f2' }}/>
        </Link>
      </li>
      <li className="inline-block" style={{ marginRight: '10px' }}>
        <Link
          aria-label="linkedin share button"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${base_url}/blogs/${slug}&title=${title}&summary=${description}&source=${base_url}`}
          target="__blank"
          rel="noreferrer noopener"
        >
          <IoLogoLinkedin style={{ color: '#0077b5' }}/>
        </Link>
      </li>
      <li className="inline-block" style={{ marginRight: '10px' }}>
        <Link
          aria-label="pinterest share button"
          href={`https://pinterest.com/pin/create/button/?url=${base_url}/blogs/${slug}&media=&description=${description}`}
          target="__blank"
          rel="noreferrer noopener"
        >
          <IoLogoPinterest style={{ color: '#e60023' }}/>
        </Link>
      </li>
    </ul>
  );
};

export default Share;
