import Image from 'next/image';
import Ingredient from 'components/Ingredient';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from 'styles/IngredientSlider.module.scss';
import left from '/public/left.png';
import right from '/public/right.png';

import { cart } from 'states/cart';
import { useRecoilState } from 'recoil';

SwiperCore.use([Navigation, Pagination]);


export default function IngredientSlider({ ingredientList }: any) {
  const [cartState, setCartState] = useRecoilState(cart);
  return (
    <div className={styles.slider_box}>
      <Swiper
        style={{ maxWidth: '85vw' }}
        spaceBetween={10}
        slidesPerView={3.3}
        slidesPerGroup={1}
        scrollbar={{
          draggable: true,
          // el: '.swiper-scrollbar',
        }}
        observer={true}
        observeParents={true}
        // navigation={{
        //   nextEl: '.right-swiper-button-next',
        //   prevEl: '.left-swiper-button-prev',
        // }}
        // pagination={{ clickable: true }}
        breakpoints={{
          350: {
            slidesPerView: 1.5,
            // slidesPerGroup: 1
          },
          550: {
            slidesPerView: 2.2,
          },
          750: {
            slidesPerView: 2.8,
          },
          900: {
            slidesPerView: 3.3,
          },
        }}
      >

        {ingredientList.map((item: any, index: number) => <SwiperSlide key={index}><Ingredient {...item} index={index} cart={cartState} setCart={setCartState} /></SwiperSlide>)}
        {/* <div class="swiper-pagination"></div> */}


      </Swiper>
      {/* 
      <div className={styles.arrow_Container}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-compact-left left-swiper-button-prev" viewBox="0 0 16 16" color='#5C5ACD'>
          <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-compact-right right-swiper-button-next" viewBox="0 0 16 16" color='#5C5ACD'>
          <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
        </svg>
      </div> */}


    </div >
  )
}