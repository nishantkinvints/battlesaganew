import Image from 'next/image';
import GrassFront from '../assets/grass front.png';
import Grass from '../assets/grass.png';
import Layer675 from '../assets/Layer 675.png';
import Base from '../assets/base.png';
import LogoBase from '../assets/logo base.png';
import BattleSaga from '../assets/battle saga.png';
import ElementSide1 from '../assets/element side 1.png';
import ElementSide2 from '../assets/element side 2.png';
import Orge from '../assets/ogre.png';
import Warrior2 from '../assets/warrior 2.png';
import Warrior1 from '../assets/warrior 1.png';
import Archer1 from '../assets/archer 1.png';
import Archer2 from '../assets/archer 2.png';
import Shadow from '../assets/shadow.png';
import Spartan from '../assets/spartan.png';
import DragonR from '../assets/dragon-right.png';
import DragonL from '../assets/dragon-left.png';
// import DragonFront from '../assets/DRAGON_FRONT copy.png';

import ComingSoom from '../assets/COMING SOON.png';
import Copyright from '../assets/Battle-Saga.png';
import Thunder from '../assets/colorful glare thunder pattern_3800458.png';
import Lightning1 from '../assets/lightning 1.png';
import Lightning2 from '../assets/lighting 2.png';
import Socials from './Socials';
import DarkBg from '../assets/dark bg.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    // this div is used for full screen
    <div className="battle_saga_wrapper">
      {/* This div is used for the top navbar */}
      <div className="dark_bg">
        <Image src={DarkBg} alt="dark"/>
      </div>
      <div className="base_img">
        <Image src={Base} alt="base"/>
        <div className="logo_battlesaga_wrap">
          <Image src={LogoBase} alt="logo battel"/>
          <div className="battleSaga_img">
            <Image src={BattleSaga} alt="battel"/>
          </div>
        </div>
      </div>

      {/* Used for the left side element */}
      <div className="tree_and_strone">
        <Image
          src={ElementSide1}
          alt="Element side 2"
          width={600}
          // layout="responsive"
        />
      </div>

      {/* Thunder */}

      {/* <div className="absolute top-8 right-1/2 w-[1020px]">
				<Image src={Thunder} />
			</div> */}
      <motion.div
        animate={{
          filter: [
            'brightness(1.5)',
            'brightness(0)',
            'brightness(1)',
            'brightness(1.9)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
          ],
        }}
        transition={{ duration: 0.9, yoyo: Infinity, delay: 0.7 }}
        className="birds_left"
      >
        <Image src={Lightning1}  alt="light"/>
      </motion.div>

      <motion.div
        animate={{
          filter: [
            'brightness(1.5)',
            'brightness(0)',
            'brightness(1)',
            'brightness(1.9)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
            'brightness(1)',
          ],
        }}
        transition={{ duration: 0.9, yoyo: Infinity, delay: 0.7 }}
        className="birds_right"
      >
        <Image src={Lightning2} alt="Lightning"/>
      </motion.div>

      {/* This div is used for the characters */}
      <div className="battle_saga_mens_wrapper">
        <div className="battle_saga_mens_inner">
          <div className="orge_img">
            <Image src={Orge} alt="Orge"/>
          </div>

          <motion.div
            animate={{ y: [-80, -50], x: [300, 300] }}
            transition={{ duration: 1, yoyo: Infinity, delay: 0.7 }}
            className="dragonL_img"
          >
            <span>
              <Image src={DragonL} alt="DragonL"/>
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [-80, -50], x: [-300, -300] }}
            transition={{ duration: 1, yoyo: Infinity }}
            className="dragonR_img"
          >
            <span>
              <Image src={DragonR} alt="DragonR"/>
            </span>
          </motion.div>

          <div className="warrior2_img_wrap">
            <span className="warrior2_img_inner">
              <Image src={Warrior2} alt="Warrior2"/>
            </span>
          </div>
          <div className="archer1_wrap">
            <span className="archer1_inner">
              <Image src={Archer1} alt="Archer1"/>
            </span>
          </div>
          <div className="Warrior1_img_wrap">
            <span className="Warrior1_img_wrap_inner">
              <Image src={Warrior1} alt="Warrior1"/>
            </span>
          </div>
          <div className="spartan_wrap_img">
            <span className="spartan_inner_img">
              <Image src={Spartan} alt="Spartan"/>
            </span>
          </div>
          <div className="archer2_img_wrap">
            <div className="archer2_img_inner">
              <Image src={Archer2} alt="Archer2"/>
            </div>
          </div>
          <div className="shadow_img_wrap">
            <Image src={Shadow} alt="Shadow"/>
          </div>
        </div>
      </div>

      {/* Used for the right side element */}
      <div className="elementside2_right">
        <Image
          src={ElementSide2}
          alt="Element side 2"
          width={600}
        />
      </div>

      {/* Used for the bottom section like Coming soon and copyright logo */}
      <motion.div
        animate={{ y: [-800, 0], x: ['-50%', '-50%'], opacity: [0, 1] }}
        transition={{ delay: 1 }}
        className="comingSoom_wrap"
      >
        <Image src={ComingSoom} alt="ComingSoom"/>
        <div className="comingSoom_inner">
          <Image src={Copyright} alt="Copyright"/>
        </div>
      </motion.div>

      {/* Used for the bottom grass section */}
      <div className="grass_wrap">
        <Image src={Grass} layout="responsive" alt="light"/>
      </div>
      <div className="grass_wrap_img">
        <Image
          src={GrassFront}
          alt="light"
        />
      </div>

      <div className="socials_wrapper">
        <Socials />
      </div>


    </div>
  );
};

export default Hero;
