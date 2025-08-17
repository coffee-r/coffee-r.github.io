import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <div className="flex flex-1 items-center justify-between">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <Button variant="ghost" className="text-lg font-bold">
              <Link href="/">
                TOP
              </Link>
            </Button>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/coffee-r" target="_blank" rel="noopener noreferrer">
              <Image src="/github.svg" width={20} height={20} alt="GitHub" />
            </a>
            <a href="https://x.com/plus_marumaru" target="_blank" rel="noopener noreferrer">
              <Image src="/x.svg" width={20} height={20} alt="X" />
            </a>
            <a href="https://zenn.dev/coffee_r" target="_blank" rel="noopener noreferrer">
              <Image src="/zenn.svg" width={20} height={20} alt="Zenn" />
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-24">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Image
                src="/avator.jpeg"
                width={200}
                height={200}
                alt="こーひーあーる"
                className="rounded-full"
              />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  こーひーあーる
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  気まぐれITエンジニア
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>自己紹介</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    事業会社でWebサービスの開発を仕事としています、こーひーあーると申します。
                    大学時代にラテアート作りを嗜んでたんでこの名前になってますが、最近はコーヒー愛薄れてきてます、すまんな...。
                    ものづくりが好きで、気が向いたときには個人開発にもチャレンジしています。
                    最近のマイブームは登山とキャンプです。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full px-16 md:px-32">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/yarigatake.jpeg"
                width={1200}
                height={900}
                alt="登山の風景"
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="w-full px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">興味や関心があるもの</h2>
            <div className="grid gap-6 lg:grid-cols-6">
              <Card className="col-start-2 col-span-2">
                <CardHeader>
                  <CardTitle>技術</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge>バックエンド開発</Badge>
                  <Badge>ゲーム開発</Badge>
                  <Badge>個人開発</Badge>
                  <Badge>チーム開発</Badge>
                  <Badge>PHP</Badge>
                  <Badge>Go</Badge>
                  <Badge>Kotlin</Badge>
                  <Badge>Unity</Badge>
                  <Badge>Godot</Badge>
                  <Badge>IPA 試験</Badge>
                  <Badge>チームにバフをかける</Badge>
                </CardContent>
              </Card>
              <Card className="col-start-4 col-span-2">
                <CardHeader>
                  <CardTitle>趣味</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge>トレッキング</Badge>
                  <Badge>キャンプ</Badge>
                  <Badge>釣り</Badge>
                  <Badge>読書</Badge>
                  <Badge>暴飲暴食</Badge>
                  <Badge>ブルーアーカイブ</Badge>
                  <Badge>睡眠</Badge>
                  <Badge>メンタルケア</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">個人開発したもの</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Webゲーム置き場 TsumikiKichi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    気軽にWebゲームを置いておける場所
                  </p>
                  <Button className="mt-4" variant="outline">
                    <a href="https://tsumiki-kichi.com" target="_blank" rel="noopener noreferrer">
                      サイトへ
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>フリーゲーム投稿サイト GodotPlayer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    GodotEngineに対応したブラウザゲーム投稿サイト
                  </p>
                  <Button className="mt-4" variant="outline">
                    <a href="https://godotplayer.com" target="_blank" rel="noopener noreferrer">
                      サイトへ
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>ビンゴ大会終了時間シュミレーター</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    宴会とかで使えるツール
                  </p>
                  <Button className="mt-4" variant="outline">
                    <a href="https://bingo-time-simulator.vercel.app" target="_blank" rel="noopener noreferrer">
                      サイトへ
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>PCゲーム Re Painter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    自分の書いたイラストが必殺技になるアクションミニゲーム
                  </p>
                  <Button className="mt-4" variant="outline">
                    <a href="https://store.steampowered.com/app/1096420/Re_Painter" target="_blank" rel="noopener noreferrer">
                      Steamへ
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>ブラウザで遊べるUnity製ミニゲーム集</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    3分くらい暇つぶしできるものを作ってあります
                  </p>
                  <Button className="mt-4" variant="outline">
                    <a href="https://unityroom.com/users/3cr10wv7fsuxmag8h594" target="_blank" rel="noopener noreferrer">
                      unityroomへ
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="w-full px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">リンク</h2>
            <div className="flex justify-center space-x-4">
              <Button asChild variant="outline">
                <a href="https://github.com/coffee-r" target="_blank" rel="noopener noreferrer">
                  <Image src="/github.svg" width={20} height={20} alt="GitHub" /> GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://x.com/plus_marumaru" target="_blank" rel="noopener noreferrer">
                  <Image src="/x.svg" width={20} height={20} alt="X" /> X (旧Twitter)
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://zenn.dev/coffee_r" target="_blank" rel="noopener noreferrer">
                  <Image src="/zenn.svg" width={20} height={20} alt="Zenn" /> Zenn
                </a>
              </Button>
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 my-6">採用ご担当様はレジュメをご覧ください。</p>
            <div className="flex justify-center space-x-4">
              <Button asChild variant="outline">
                <Link href="/resume">
                  レジュメ
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 こーひーあーる
        </p>
      </footer>
    </div>
  )
}