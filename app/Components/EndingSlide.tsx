import Image from 'next/image';
import Link from 'next/link';

export default function EndingSlide() {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh] bg-customGold">
      <div className="flex w-full justify-center items-center px-8 pr-40">
        <div className="w-1/2 flex justify-end items-center pl-20">
          <Image
            src="/images/MainBrand Navy.png"
            alt="Brand Logo"
            width={350}
            height={175}
            objectFit="contain"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center pr-20">
          <p className="text-customBlue text-4xl mb-2" style={{ fontFamily: 'bm hanna_tff' }}>Contact Us</p>
          <p className="text-customBlue text-xl mb-6" style={{ fontFamily: 'bm hanna_tff' }}>Tel.0636145491</p>
          <div className="flex flex-row justify-start space-x-4 mb-6">
            <Link href="https://www.instagram.com/rizhy170/" passHref>
              <Image
                src='/images/IG.png'
                alt='Instagram Logo'
                width={100}
                height={100}
              />
            </Link>
            <Link href="https://www.tiktok.com/@hypedgearofficial?is_from_webapp=1&sender_device=pc" passHref>
              <Image
                src='/images/TikTok.png'
                alt='TikTok Logo'
                width={90}
                height={100}
              />
            </Link>
          </div>
          <p className="text-black text-xl m-0 p-0">2024 - Website By Patiharn Liangkobkit</p>
        </div>
      </div>
    </div>
  );
}
