"use client"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DOMPurify from 'dompurify';
import {VoteBar, Comment, Button, VoteOption} from "./Index";
import {renderStartFromNumber} from "../util/helper";
import {  useCallback, useState } from 'react';
import { apiRatings } from '@/api';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

function TabInfo({description, total, ratings, nameProduct, pid, setProduct}) {
  const router = useRouter();
  const {current} = useSelector(state => state.user)
  const [isVote, setIsVote] = useState(false);
  const toggleVote = useCallback(() => {
    if (!current) {
      Swal.fire('Please complete login','Login to rate','error').then((rs) => {
        if(rs.isConfirmed)  router.push('/login');
      });
    }
    setIsVote(!isVote);
  }, [current, isVote, router]);
  const [payload, setPayload] = useState({
    comment: '',
    score: ''
  });
  const handleSubmitVoteOption = async({comment, score}) => {
    if(!comment || !pid || !score) {
      alert('Please complete all information');
      return;
    }
    const response = await apiRatings({star: score, comment, pid})
    if (response.status) {
      toast.success('Thank you for rating!!')
      setProduct();
      setIsVote(false);
    }
  }
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3 custom-tab"
      variant="underline"
      fill
    >
      <Tab eventKey="home" title="Mô tả">
      {description && (
      <div  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} />
    )}
      </Tab>
      <Tab eventKey="profile" title="Đánh giá">
        {isVote && <div className='vote position-fixed top-50 start-50 translate-middle shadow-sm'>
          <VoteOption
            nameProduct={nameProduct}
            handleSubmitVoteOption = {handleSubmitVoteOption}
          />
          </div>}
        <div className='row'>
          <div className='col-5 border d-flex flex-column justify-content-center align-items-center'>
            <span className='mb-2'>{`${total}/5`}</span>
            <span className='mb-2'>{renderStartFromNumber(total)}</span>
            <span className='mb-2'>{`${ratings?.length} đánh giá`}</span>
          </div>
          <div className='col-7 border'>
            {Array.from(Array(5).keys()).reverse().map(el => (
              <VoteBar
                key={el}
                number={el+1}
                ratingCount={ratings?.filter(i => i.star === el+1)?.length}

                ratingTotal={ratings?.length}
              />
            ))}
          </div>
        </div>
        <div className='row text-center py-3'>
          <span>Bạn muốn đánh giá về sản phẩm?</span>
          <Button
          name='Đánh giá ngay'
          handleOnClick={toggleVote}
          />
        </div>
        <div>
          {ratings?.map(el => (
          <Comment
          key={el._id}
            id={el.postedBy}
            star={el.star}
            comment={el.comment}
            updatedAt={el.updatedAt}
          />
        ))}
        </div>
      </Tab>
    </Tabs>
  );
}

export default TabInfo;