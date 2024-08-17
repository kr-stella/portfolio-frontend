import { useRouter } from 'next/router';
import React from 'react';
// import Counter from '../../../components/Counter';
import Head from 'next/head';
// export async function getServerSideProps() {
//     // 서버 사이드에서 API 호출
//     const response = await fetch('http://localhost:8080/api/hello');
//     console.log(response);
//     const message = await response.text();

//     return {
//         props: {
//             message, // 페이지 컴포넌트로 message 프롭을 전달
//         },
//     };
// }
const DataDetail = ({ message }) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            TEST
             {/* <Head>
                <title>{`${id} 상세데이터`}</title>
                <meta name="description" content={message} />
                <meta property="og:title" content={message} />
                <meta property="og:description" content="Description of A Page" />
                <meta property="og:image" content="/path-to-your-image.jpg" />
                <meta property="og:url" content="https://yourdomain.com/a" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>게시판 C 상세 조회</h1>
            <p>조회하는 데이터 ID: {id}</p>
            <p>Result: {message}</p> */}
        </div>
    );
}

export default DataDetail;