"use client";
import Image from "next/image"
import Logo from "../../public/img/logo/user-circle.png"
import moment from "moment"
import {renderStartFromNumber} from "../util/helper";
import {apiGetUserId} from "../api"
import { useEffect, useState } from "react";
const Comment = ({ comment, updatedAt, star, id}) => {
  return (
    <div className="row border p-2">
        <div className="col-12 ">
            <div className="d-flex justify-content-between">
                <span>
                <Image className="mx-2" src={Logo} width={25} height={25} alt="Logo"/>
                    {id?.name}
                    </span>
                <span className="">{moment(updatedAt).fromNow()}</span>
            </div>
            <div className="d-flex flex-column p-2 my-3 bg-white">
                <span>
                    <span>Vote:</span>
                    <span> {renderStartFromNumber(star)}</span>
                </span>
                <span className="py-2">
                    <span>Đánh giá:</span>
                    <span> {comment}</span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Comment