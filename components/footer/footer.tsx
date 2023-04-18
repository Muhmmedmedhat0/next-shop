import React from 'react';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MapIcon from '@mui/icons-material/Map';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';

import classes from "./footer.module.scss";
import Image from 'next/image';
import { imageLoader } from '../../helpers/image-loader';


function Footer() {
  return (
    <footer className={classes.container}>
      <div className={classes.left}>
        <h1 className={classes.logo}>
          <Link href="/">Logo</Link>
        </h1>
        <p className={classes.description}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className={classes.socialContainer}>
          <div className={classes.socialIcon} style={{ color: '#3B5999' }}>
            <FacebookIcon />
          </div>
          <div className={classes.socialIcon} style={{ color: '#E4405F' }}>
            <InstagramIcon />
          </div>
          <div className={classes.socialIcon} style={{ color: '#55ACEE' }}>
            <TwitterIcon />
          </div>
          <div className={classes.socialIcon} style={{ color: '#E60023' }}>
            <PinterestIcon />
          </div>
        </div>
      </div>
      <div className={classes.center}>
        <h3 className={classes.title}>Useful Links</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>Cart</li>
          <li className={classes.listItem}>Man Fashion</li>
          <li className={classes.listItem}>Woman Fashion</li>
          <li className={classes.listItem}>Accessories</li>
          <li className={classes.listItem}>My Account</li>
          <li className={classes.listItem}>Order Tracking</li>
          <li className={classes.listItem}>Wishlist</li>
          <li className={classes.listItem}>Terms</li>
          <li className={classes.listItem}>Privacy Policy</li>
        </ul>
      </div>
      <div className={classes.right}>
        <h3 className={classes.title}>Contact Us</h3>
        <div className={classes.contactItem}>
          <MapIcon/>
          &nbsp;&nbsp;123 Main St.
        </div>
        <div className={classes.contactItem}>
          <PhoneEnabledIcon/>
          &nbsp;&nbsp;+201098014450
        </div>
        <div className={classes.contactItem}>
          <PhoneEnabledIcon />
          &nbsp;&nbsp;@admin.com
        </div>
        <Image
          className={classes.payment}
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="payment"
					loader={imageLoader} unoptimized
					width={50}
					height={50}
        />
      </div>
    </footer>
  );
}

export default Footer;