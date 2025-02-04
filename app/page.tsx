'use client'
import Image from "next/image";
import styles from "./page.module.css";
import LoginIcon from '@mui/icons-material/Login';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  let fetchQuote = false;
  const [quote, setQuote] = useState({}as QuoteResponse);
  if (quote === null){
    fetchQuote = true;
  }

  let request = undefined;
  
  if (quote == null){
    request = fetch('https://api.api-ninjas.com/v1/quotes',  {method: 'GET',
      headers: new Headers({
          'X-Api-Key': '/Q+q2qqTw5kXXRyBMDZVJA==70drcniO54a7C3NU'
      })
    });
  }

  useEffect( () =>{
    request = fetch('https://api.api-ninjas.com/v1/quotes',  {method: 'GET',
      headers: new Headers({
          'X-Api-Key': '/Q+q2qqTw5kXXRyBMDZVJA==70drcniO54a7C3NU'
      })
    }).then((res)=>{res.json().then((data:QuoteResponse[])=>{
      setQuote ( data[0]);
    })});
    ;
  },[]);


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
            <div>
              Welcome to Ad management system.
            </div>
            <div className={styles.box}>
              <p className={styles.quote}>{quote.quote||'quote'}</p>
              <p className={styles.author}>{quote.author||'author'}</p>
            </div>
        

        <div className={styles.ctas}>
          <Link
            className={styles.primary}
            href="/login/"
          >
            <LoginIcon/>
            Log in
          </Link>
          <a
            href="https://github.com/matfil/ctpoc"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            <GitHubIcon/>
            Read my code
          </a>
        </div>
      </main>
    </div>
  );
}



interface QuoteResponse {
  quote:string;
  author:string;
  category:string
}