import React,{useState} from "react";
import JoinPointechsStyles from "../styles/joinPointechs.module.scss";
import { RiArrowDropRightLine } from "react-icons/ri";
import {useTranslation} from "next-i18next";
import { useRouter } from "next/router";
import {motion} from "framer-motion";
const DynamicSignup = dynamic(()=>import('./signup'),{ssr:false});
const DynamicLogin = dynamic(()=>import("./login"),{ssr:false});
import dynamic from "next/dynamic";
function JoinPointechs() {
  const {t} = useTranslation('common');
  const {locale} = useRouter();
  const [signupModalShow, setSignupModalShow] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);
  return (
      <>
          <div className={JoinPointechsStyles["join-section"]} style={{direction:locale=='en'?'ltr':'rtl'}}>
      <div>
        <p >
          {t("join_p2")}
        </p>
        <motion.button type="button" className={"btn"}
         whileHover={{scale:1.1,textShadow:'0px 0px 8px #27323C'}} 
         transition={{type:'spring',stiffness:300}}
         style={{direction:locale == 'en'?'ltr':'ltr'}}
         onClick={ ()=>setSignupModalShow(true)}

         >
         
          {t("Get Started Now")}{" "}
          <RiArrowDropRightLine style={{ verticalAlign:locale == 'en'?"text-bottom":"text-top" }} />
        </motion.button>
      </div>
    </div>
        <DynamicSignup show={signupModalShow} setLoginModalShow={setLoginModalShow} onHide={()=>setSignupModalShow(false)}/>
        <DynamicLogin show={loginModalShow} setSignupModalShow={setSignupModalShow} onHide={()=>setLoginModalShow(false)}/>
      </>
  );
}

export default JoinPointechs;
