"use client";
import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const FinalRegister = () => {
  const { id } = useParams();
  const router = useRouter();
  console.log(id)

  useEffect(() => {
    if (id === 'failed') {
      Swal.fire('Opp!', 'Đăng kí không thành công!', 'error').then(() => {
        router.push('/login');
      });
    }
    if (id === 'success') {
      Swal.fire('Congratulation!', 'Đăng kí thành công!', 'success').then(() => {
        router.push('/login');
      });
    }
  }, [id, router]);
}
export default FinalRegister;
