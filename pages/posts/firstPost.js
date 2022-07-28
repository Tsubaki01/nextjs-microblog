import Link from "next/dist/client/link";
import Head from "next/dist/shared/lib/head";

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>最初の投稿</title>
      </Head>
      <h1>最初の投稿</h1>
      <Link href="/">ホームへ戻る</Link>
    </div>
  );
}
