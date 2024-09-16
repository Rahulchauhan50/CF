import React from "react";
import { useMediaQuery } from 'react-responsive';

const ModalWorkTiles = ({ show, close, title, Src }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  console.log()
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
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 1050,
      }}
    >
      {/* <div className="d-xl-none d-lg-none d-md-none d-sm-block d-xs-none"> */}
      {
        isSmallScreen?  <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "90%",
          height: "40%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          borderRadius: "10px",
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
            src={Src}
            title='YouTube video player'
           
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>: <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "50vw",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          borderRadius: "10px",
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
            src={Src}
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
     
    // </div>
  );
};

export default ModalWorkTiles;
