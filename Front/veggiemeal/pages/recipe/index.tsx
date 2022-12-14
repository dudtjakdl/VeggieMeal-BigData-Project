import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from 'styles/Recipe.module.scss';

import leafy from '/public/leafy_green.png';
import cooking from '/public/cooking.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function Recipe() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>레시피 | 베지밀</title>
      </Head>

      <main className={styles.main}>
        <header>
          <h1 className={styles.recipe_title}>레시피 모아 보기</h1>
        </header>
        <section className={styles.grid_container}>
          <Button id={styles.veggie_btn} onClick={() => router.push('/recipe/veggie')}>
            <div>
              <span id={styles.veggie_bold} style={{cursor: 'url("/cursor/pointer.png"), pointer'}}>채식 단계</span>
              <span style={{cursor: 'url("/cursor/pointer.png"), pointer'}}>에</span>
            </div>
            <p style={{cursor: 'url("/cursor/pointer.png"), pointer'}}>따른 레시피를 보여드려요</p>
            <Image className={styles.leafy} src={leafy} alt="leafy_green" quality={100} width={100} height={100} 
            style={{cursor: 'url("/cursor/pointer.png"), pointer'}}/>
            <p style={{cursor: 'url("/cursor/pointer.png"), pointer'}}>채식</p>
          </Button>
          <Button id={styles.fridge_btn} onClick={() => router.push('/recipe/fridge')}>
            <div>
              <span id={styles.fridge_bold} style={{cursor: 'url("/cursor/pointer.png"), pointer'}}>원하는 재료</span>
              <span style={{cursor: 'url("/cursor/pointer.png"), pointer'}}>에</span>
            </div>
            <p style={{cursor: 'url("/cursor/pointer.png"), pointer'}}>따른 레시피를 보여드려요</p>
            <Image className={styles.cooking} src={cooking} alt="cooking pan" quality={100} width={100} height={100} 
             style={{cursor: 'url("/cursor/pointer.png"), pointer'}}/>
            <p style={{cursor: 'url("/cursor/pointer.png"), pointer'}}>냉장고</p>
          </Button>
        </section>
      </main>
    </div>
  )
}