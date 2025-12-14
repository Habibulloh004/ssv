"use client";
import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Image from "next/image";

const ACCESS_CODE = "3256";
const SESSION_KEY = "sickLeaveAccess";

export default function Page() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.sessionStorage.getItem(SESSION_KEY);
    if (stored === "true") {
      setIsVerified(true);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (code.trim() === ACCESS_CODE) {
      window.sessionStorage.setItem(SESSION_KEY, "true");
      setIsVerified(true);
      setError("");
    } else {
      setError("Неверный код. Попробуйте ещё раз.");
    }
  };

  if (!isVerified) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-4">
        <div className="w-full max-w-[520px]">
          {/* Header */}
          <div className="mb-10 flex items-center justify-center gap-5">
            <Image src="/gerb.jpg" alt="Герб" width={96} height={96} priority />
            <div className="text-[22px] leading-[1.25] text-black">
              Министерство здравоохранения
              <br />
              Республики Узбекистан
            </div>
          </div>

          {/* Card */}
          <form
            onSubmit={handleSubmit}
            className="
            rounded-[30px]
            bg-white
            px-12
            py-12
            shadow-[0_30px_70px_rgba(0,0,0,0.08)]
          "
          >
            <label className="block text-[18px] text-black">
              Код подтверждения
            </label>

            <input
              className="
              mt-4
              h-[64px]
              w-full
              rounded-[22px]
              border
              border-[#DDE3EE]
              px-6
              text-center
              text-[32px]
              font-medium
              text-black
              placeholder:text-[#A0A4AD]
              focus:border-[#6F8EFF]
              focus:outline-none
            "
              placeholder="Введите код"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              inputMode="numeric"
              autoComplete="one-time-code"
            />

            {error && <p className="mt-4 text-[14px] text-red-600">{error}</p>}

            <button
              type="submit"
              className="
              mt-8
              h-[60px]
              w-full
              rounded-[20px]
              bg-[#6F8EFF]
              text-[18px]
              font-semibold
              text-white
              transition
              hover:bg-[#5C7CFF]
            "
            >
              Подтвердить
            </button>
          </form>
        </div>
      </main>
    );
  }

  return <Certificate />;
}

function Certificate() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) {
      window.print();
    }
  }, []);

  return (
    <main className="bg-white px-4 py-6 sm:px-0 sm:py-8">
      <section className="mx-auto w-full max-w-[794px] px-4 py-6 text-black sm:px-10 sm:py-8">
        {/* Date */}
        <div className="text-right text-[12px] leading-[1.25]">
          11.11.2025, 11:23
        </div>

        {/* Header */}
        <div className="mt-6 grid grid-cols-3 items-center">
          <Header />
          <div className="flex justify-center">
            <Image src="/gerb.jpg" alt="Logo" width={80} height={80} />
          </div>
          <Header />
        </div>

        {/* Title */}
        <div className="mt-6 text-center leading-[1.3]">
          <div className="text-[17px] font-bold">
            Ta’lim olayotgan shaxslar uchun mehnatga layoqatsizlik
            ma’lumotnomasi
          </div>

          <div className="mt-2 text-[14px]">
            <span className="font-bold">Ro’yhatga olingan sana:</span>{" "}
            2025-11-11
          </div>

          <div className="text-[14px] font-bold">№ 11СуВ 000771125</div>

          <div className="mt-1 text-[14px]">
            <span className="font-bold">Tibbiy muassasa nomi:</span>
            Olot tumani 43-sonli oilaviy poliklinika
          </div>

          <div className="text-[12px]">(qaysi muassa tomonidan berilgan)</div>
        </div>

        {/* TABLE */}
        <div className="mt-6 border border-black text-[14px] leading-[1.3]">
          <Row
            lNo="1"
            lTitle="Vaqtincha mehnatga layoqatsiz fuqaro haqidagi ma’lumotlar"
            lBody={
              <>
                <Field k="FISH" v="Mehmonov Javlonbek Obidjonovich" />
                <Field k="Jinsi" v="Erkak" />
                <Field k="JShShIR" v="51408055270021" />
                <Field k="Yoshi" v="20 yosh" />
                <Field k="Bemor bolaga qarindoshligi" v="" />
              </>
            }
            rNo="1a"
            rTitle="Bemor bola haqidagi ma’lumotlar"
            rBody={
              <>
                <Field k="FISH" v="" />
                <Field k="Jinsi" v="" />
                <Field k="JShShIR" v="" />
                <Field k="Yoshi" v="" />
              </>
            }
          />

          <SimpleRow
            lNo="2"
            lTitle="Yashash manzili"
            lValue="Buxoro viloyati, Olot tumani, Usmon Shayx MFY, 25"
            rNo="3"
            rTitle="Ish/o‘qish joyi (tashkilot nomi)"
          />

          <SimpleRow
            lNo="4"
            lTitle="Biriktirilgan tibbiy muassasa"
            rNo="5"
            rTitle="Mehnatga layoqatsizlik sababi"
            rValue="Kasallik"
          />

          <SimpleRow
            lNo="6"
            lTitle="Tashxis (KXT-10 kodi va Nomi)"
            lValue="J02.9 Aniqlanmagan o‘tkir faringit"
            rNo="7"
            rTitle="Davolovchi shifokor / Bo‘lim boshlig‘i"
            rValue="MENGLIEV DILMUROD KURBANOVICH"
          />

          <SimpleRow
            lNo="8"
            lTitle="Yakuniy tashxis"
            lValue="J02.9 Aniqlanmagan o‘tkir faringit"
            rNo="9"
            rTitle="VMK raisining FISH"
          />

          <SimpleRow
            lNo="10"
            lTitle="Yuqumli kasallik bilan kontakt"
            rNo="11"
            rTitle="TIEK ma’lumotlari"
          />

          <SimpleRow
            lNo="12"
            lTitle="Tartib"
            rNo="13"
            rTitle="Ishdan ozod etilgan kunlar"
            rValue="2025-11-11 – 2025-11-26 gacha"
          />

          <SimpleRow
            lNo="14"
            lTitle="Vaqtincha boshqa ishga o‘tkazilsin"
            rNo="15"
            rTitle="Boshqa shahardan kelgan bemorga ruxsat"
          />
        </div>

        {/* FOOTER */}
        <div className="mt-6 flex items-center gap-5">
          <QRCodeCanvas
            value={
              "https://ssv-hazel.vercel.app/form/sick-leave/67ef4f7aabaaa55e5b5ed7c1"
            }
            size={90}
            fgColor="#000"
            bgColor="#fff"
          />

          <div className="text-[22px] font-bold">3256</div>

          <div className="text-[13px] leading-[1.3]">
            QR-kod skaner qilinganda, ushbu hujjatning nusxasi O‘zbekiston
            Respublikasi Sog‘liqni saqlash vazirligining rasmiy axborot
            resursidan
            <span className="underline"> https://ssv.uz </span>
            generatsiya qilinadi.
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===== COMPONENTS ===== */

function Header() {
  return (
    <div className="text-center text-[14px] font-bold leading-[1.25]">
      O‘ZBEKISTON RESPUBLIKASI <br />
      SOG‘LIQNI SAQLASH VAZIRLIGI
    </div>
  );
}

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <span className="font-bold">{k}:</span> {v}
    </div>
  );
}

function Row(props: any) {
  return (
    <div className="grid grid-cols-[52px_1fr_52px_1fr] border-b border-black">
      <Cell center>{props.lNo}</Cell>
      <Cell>
        <div className="font-bold mb-1">{props.lTitle}</div>
        {props.lBody}
      </Cell>
      <Cell center>{props.rNo}</Cell>
      <Cell>
        <div className="font-bold mb-1">{props.rTitle}</div>
        {props.rBody}
      </Cell>
    </div>
  );
}

function SimpleRow({ lNo, lTitle, lValue, rNo, rTitle, rValue }: any) {
  return (
    <Row
      lNo={lNo}
      lTitle={lTitle}
      lBody={lValue}
      rNo={rNo}
      rTitle={rTitle}
      rBody={rValue}
    />
  );
}

function Cell({ children, center }: any) {
  return (
    <div
      className={`border-r border-black p-3 ${
        center ? "flex items-center justify-center" : ""
      }`}
    >
      {children}
    </div>
  );
}
