import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useFirestore from "../../hooks/useFirestore";
import UploadForm from "../UploadForm/UploadForm";
import ImageCarousel from "./ImageCarousel";

export default function Welcome() {
  useEffect(() => {
    document.title = `A & M | #mimirgettingmarried`;
  });

  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.session.id);
  const { docs } = useFirestore("am-photos");
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState(null);
  const [imgID, setImgID] = useState(null);
  const [index, setIndex] = useState(0);

  const handleClick = (url, id) => {
    setImg(url);
    setImgID(id);
  };

  return (
    <div id="welcome-container">
      <div id="logged-in-img-grid">
        {docs &&
          docs.map((doc, idx) => (
            <div
              className="img-wrap"
              key={idx}
              onClick={() => handleClick(doc.url, doc.id)}
            >
              <img src={doc.url} alt={doc.id} />
            </div>
          ))}
      </div>
      {img && <ImageCarousel img={img} setImg={setImg} imgID={imgID} />}
    </div>
  );
}
