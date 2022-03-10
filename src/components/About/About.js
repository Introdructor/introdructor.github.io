import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="hfest_avatar_2.jpg" />
        </div>
        <p>
          Hi, I'm Introdructor, a Wallpaper,UI designer & Android Developer from
          India.
          <a className="about__link" href="https://razorpay.com">
            Razorpay
          </a>{' '}
          as a Designer, I've been designing stuff since past three years
         , I've made countless side projects and I also
          posses magical powers of using codes to build delightful user
          interfaces.
          <br />
          <br />I also love doing <b>open source</b> development, I actively
          maintain various notable open source projects. It gives me a
          wonderful feeling of achievement and joy which I cannot explain in
          words.
        </p>
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p>“Simplicity is the baddest choice to be the best.“</p>
        </Quote>
        <Quote>
          <p>
            “I know I’m not successful enough, but I’m passionate enough not to
            worry about success.“
          </p>
        </Quote>
        <Quote>
          <p>
            “Creativity is the driver of an unstoppable train called Passion.”
          </p>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
