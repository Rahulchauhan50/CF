import React from "react";
import { useMediaQuery } from 'react-responsive';

const Modal1 = ({ show, close, title }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  if (!show) {
    return null;
  }

  return (
    <div
      className='modal show'
      onClick={close}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "fixed",
        top: 30,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1050,
        border: "none",
      }}
    >
      {
        isSmallScreen ?  <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "90%",
          height: "60%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            borderBottom: "1px solid #dee2e6",
          }}
        ></div>

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
          }}
        >
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/KXItezz-BhA?autoplay=1&mute=1&loop=1&si=ryhPNoRJWM89mDPk'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>:
       <div
       onClick={(e) => e.stopPropagation()}
       style={{
         width: "90%",
         height: "90%",
         display: "flex",
         flexDirection: "column",
         position: "relative",
         borderRadius: "8px",
         overflow: "hidden",
       }}
     >
       <div
         style={{
           display: "flex",
           justifyContent: "space-between",
           alignItems: "center",
           padding: "10px 20px",
           borderBottom: "1px solid #dee2e6",
         }}
       ></div>

       <div
         style={{
           flex: 1,
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           padding: 0,
         }}
       >
         <iframe
           width='100%'
           height='100%'
           src='https://www.youtube.com/embed/KXItezz-BhA?autoplay=1&mute=1&&loop=1&si=ryhPNoRJWM89mDPk'
           title='YouTube video player'
           allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
           referrerPolicy='strict-origin-when-cross-origin'
           allowFullScreen
           style={{ border: "none" }}
         ></iframe>
       </div>
     </div>
      }
     
    </div>
  );
};

export default Modal1;
