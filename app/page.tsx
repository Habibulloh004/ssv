export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-100 py-8">
      {/* A4 page */}
      <section className="mx-auto w-[794px] bg-white px-10 py-8 shadow">
        {/* Top meta time (PDFda yuqorida vaqt bor) */}
        <div className="mb-2 text-right text-[12px] text-neutral-700">
          11.11.2025, 11:23
        </div>

        {/* Header: left / center emblem / right */}
        <div className="grid grid-cols-3 items-start gap-4">
          <div className="text-center text-[14px] font-semibold leading-tight">
            O&apos;ZBEKISTON RESPUBLIKASI
            <br />
            SOG&apos;LIQNI SAQLASH VAZIRLIGI
          </div>

          <div className="flex justify-center">
            {/* Gerb o‘rniga placeholder (keyin rasm qo‘yamiz) */}
            <div className="h-14 w-14 rounded-full border border-neutral-300 bg-neutral-50" />
          </div>

          <div className="text-center text-[14px] font-semibold leading-tight">
            O&apos;ZBEKISTON RESPUBLIKASI
            <br />
            SOG&apos;LIQNI SAQLASH VAZIRLIGI
          </div>
        </div>

        {/* Title */}
        <div className="mt-4 text-center">
          <div className="text-[16px] font-semibold">
            Ta’lim olayotgan shaxslar uchun mehnatga layoqatsizlik ma’lumotnomasi
          </div>
          <div className="mt-2 text-[13px]">
            <span className="font-medium">Ro’yhatga olingan sana:</span> 2025-11-11
          </div>
          <div className="text-[13px]">
            <span className="font-medium">№</span> 11СуВ 000771125
          </div>
          <div className="mt-1 text-[13px]">
            <span className="font-medium">Tibbiy muassasa nomi:</span> Olot tumani 43-sonli oilaviy poliklinika
            <span className="ml-2 text-[11px] text-neutral-600">(qaysi muassa tomonidan berilgan)</span>
          </div>
        </div>

        {/* Table */}
        <div className="mt-5 border border-neutral-700">
          {/* Helper: row */}
          <Row
            leftNo="1"
            leftTitle="Vaqtincha mehnatga layoqatsiz fuqaro haqidagi ma’lumotlar"
            leftBody={
              <>
                <Line k="FISh" v="Mehmonov Javlonbek Obidjonovich" />
                <Line k="Jinsi" v="Erkak" />
                <Line k="JShShIR" v="51408055270021" />
                <Line k="Yoshi" v="20 yosh" />
                <Line k="Bemor bolaga qarindoshligi" v="" />
              </>
            }
            rightNo="1a"
            rightTitle="Bemor bola haqidagi ma’lumotlar"
            rightBody={
              <>
                <Line k="FISh" v="" />
                <Line k="Jinsi" v="" />
                <Line k="JShShIR" v="" />
                <Line k="Yoshi" v="" />
              </>
            }
          />

          <Row
            leftNo="2"
            leftTitle="Yashash manzili"
            leftBody={<>Buxoro viloyati, Olot tumani, Usmon Shayx MFY, 25</>}
            rightNo="3"
            rightTitle="Ish/o`qish joyi (tashkilot nomi)"
            rightBody={<></>}
            compact
          />

          <Row
            leftNo="4"
            leftTitle="Biriktirilgan tibbiy muassasa"
            leftBody={<div className="h-5 border-b border-neutral-400" />}
            rightNo="5"
            rightTitle="Mehnatga layoqatsizlik sababi"
            rightBody={<>Касаллик</>}
            compact
          />

          <Row
            leftNo="6"
            leftTitle="Tashxis (KXT-10 kodi va Nomi)"
            leftBody={<><span className="font-semibold">J02.9</span> Aniqlanmagan Otkir faringit</>}
            rightNo="7"
            rightTitle="Davolovchi shifokor / Bo’lim boshlig’i"
            rightBody={
              <>
                <div><span className="font-semibold">Davolovchi shifokor FISH:</span> MENGLIEV DILMUROD KURBANOVICH</div>
                <div className="mt-1"><span className="font-semibold">Bo’lim boshlig’i (mas’ul shaxs) FISH:</span> MENGLIEV DILMUROD KURBANOVICH</div>
              </>
            }
          />

          <Row
            leftNo="8"
            leftTitle="Yakuniy tashxis (Nomi va KXT-10 kodi)"
            leftBody={<><span className="font-semibold">J02.9</span> Aniqlanmagan Otkir faringit</>}
            rightNo="9"
            rightTitle="VMK raisining FISH"
            rightBody={<></>}
            compact
          />

          <Row
            leftNo="10"
            leftTitle="Yuqumli kasallikka chalingan bemor bilan kontaktda bo’lganligi haqidagi ma’lumotlar"
            leftBody={<>11</>}
            rightNo="11"
            rightTitle="TIEK ma’lumotlari"
            rightBody={
              <>
                <div><span className="font-semibold">Ko’rikdan o’tgan sanasi:</span></div>
                <div><span className="font-semibold">Xulosa:</span></div>
                <div><span className="font-semibold">TIEK raisi FISH:</span></div>
              </>
            }
          />

          <Row
            leftNo="12"
            leftTitle="Tartib"
            leftBody={<><span className="font-semibold">Tartib buzilganlik to’g’risida qaydlar:</span></>}
            rightNo="13"
            rightTitle="Ishdan ozod etilgan kunlar"
            rightBody={<>2025-11-11 - 2025-11-26 gacha</>}
            compact
          />

          <Row
            leftNo="14"
            leftTitle="Vaqtincha boshqa ishga o’tkazilsin"
            leftBody={<></>}
            rightNo="15"
            rightTitle="Boshqa shahardan kelgan bemorga ..."
            rightBody={<>mehnatga layoqatsizlik varaqasini berish uchun ruhsat etiladi: (mavjud bo’lsa «ha»)</>}
          />
        </div>

        {/* Footer QR + code + note */}
        <div className="mt-6 flex items-end gap-6">
          {/* QR placeholder */}
          <div className="h-24 w-24 border border-neutral-800" />
          <div className="text-[22px] font-semibold tracking-wide text-neutral-700">3256</div>
          <div className="flex-1 text-[12px] leading-snug text-neutral-800">
            QR-kod skaner qilinganda, ushbu hujjatning nusxasi O&apos;zbekiston Respublikasi Sog&apos;liqni
            saqlash vazirligining rasmiy axborot resursidan <span className="text-blue-700">https://ssv.uz</span>{" "}
            generatsiya qilinadi.
          </div>
        </div>

        <div className="mt-2 text-right text-[12px] text-neutral-700">1/1</div>
      </section>
    </main>
  );
}

function Line({ k, v }: { k: string; v: string }) {
  return (
    <div className="text-[12px] leading-snug">
      <span className="font-semibold">{k}:</span> {v}
    </div>
  );
}

function Row(props: {
  leftNo: string;
  leftTitle: string;
  leftBody: React.ReactNode;
  rightNo: string;
  rightTitle: string;
  rightBody: React.ReactNode;
  compact?: boolean;
}) {
  const { leftNo, leftTitle, leftBody, rightNo, rightTitle, rightBody, compact } = props;

  return (
    <div className="grid grid-cols-[52px_1fr_52px_1fr] border-b border-neutral-700 last:border-b-0">
      {/* left no */}
      <div className="flex items-center justify-center border-r border-neutral-700 text-[12px]">{leftNo}</div>

      {/* left cell */}
      <div className={`border-r border-neutral-700 p-3 ${compact ? "py-2" : ""}`}>
        <div className="text-[12px] font-semibold">{leftTitle}:</div>
        <div className="mt-1 text-[12px]">{leftBody}</div>
      </div>

      {/* right no */}
      <div className="flex items-center justify-center border-r border-neutral-700 text-[12px]">{rightNo}</div>

      {/* right cell */}
      <div className={`p-3 ${compact ? "py-2" : ""}`}>
        <div className="text-[12px] font-semibold">{rightTitle}:</div>
        <div className="mt-1 text-[12px]">{rightBody}</div>
      </div>
    </div>
  );
}
