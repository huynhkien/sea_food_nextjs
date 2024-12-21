"use client";

import { memo, useState } from "react";
import Image from "next/image";
import Logo from "../../public/img/logo/Screenshot_2024-06-27_231403-removebg-preview.png";
import { voteOptions } from "../util/contant";
import { FaStar } from "react-icons/fa";
import {Button} from "../components/Index";

const VoteOption = ({ nameProduct, handleSubmitVoteOption  }) => {
    const [chosenScore, setChosenScore] = useState(null);
    const [comment, setComment] = useState('');
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <span>
        <Image src={Logo} width={100} height={100} alt="Logo" />
      </span>
      <h4>{nameProduct}</h4>
      <textarea
        className="w-75"
        value={comment}
        onChange={e => setComment(e.target.value)}></textarea>
      <div className="py-2 text-center">
        <span>Bạn cảm thấy sản phẩm như thế nào?</span>
        <div className="d-flex gap-3 py-2">
          {voteOptions.map(el => (
            <div onClick={() => setChosenScore(el.id)} style={{cursor:'pointer'}} key={el.id} className="d-flex flex-column p-2 bg-light justify-content-center align-items-center w-50 rounded shadow-sm">
              {Number(chosenScore) && chosenScore >= el.id ? <FaStar color="yellow"/> : <FaStar color="gray" />}
              <span >{el.text}</span>
            </div>
          ))}
        </div>
        <Button
            name='Enter'
            handleOnClick={() => handleSubmitVoteOption({comment, score: chosenScore})}
        />
      </div>
    </div>
  );
};

export default memo(VoteOption);
