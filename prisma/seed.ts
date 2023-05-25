import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { faker } from '@faker-js/faker';

async function main() {
  await prisma.penyakit.deleteMany();
  await prisma.gejala.deleteMany();

  await prisma.penyakit.createMany({
    data: [
      //
      {
        kode_penyakit: 'P1',
        nama_penyakit: 'Pseudomonas hydrophylla',
        Solusi: JSON.stringify(
          [...Array(faker.number.int({ max: 10, min: 3 }))].map((e) =>
            faker.lorem.text(),
          ),
        ),
      },
      {
        kode_penyakit: 'P2',
        nama_penyakit: 'Aeromonas hydrophylla',
        Solusi: JSON.stringify(
          [...Array(faker.number.int({ max: 10, min: 3 }))].map((e) =>
            faker.lorem.text(),
          ),
        ),
      },
      {
        kode_penyakit: 'P3',
        nama_penyakit: 'Aeromonas punctate',
        Solusi: JSON.stringify(
          [...Array(faker.number.int({ max: 10, min: 3 }))].map((e) =>
            faker.lorem.text(),
          ),
        ),
      },
      {
        kode_penyakit: 'P4',
        nama_penyakit: 'Columnaris',
        Solusi: JSON.stringify(
          [...Array(faker.number.int({ max: 10, min: 3 }))].map((e) =>
            faker.lorem.text(),
          ),
        ),
      },
      {
        kode_penyakit: 'P5',
        nama_penyakit: 'Edwardsiella',
        Solusi: JSON.stringify(
          [...Array(faker.number.int({ max: 10, min: 3 }))].map((e) =>
            faker.lorem.text(),
          ),
        ),
      },
      {
        kode_penyakit: 'P6',
        nama_penyakit: 'Tuberculosis',
        Solusi: JSON.stringify(
          [...Array(faker.number.int({ max: 10, min: 3 }))].map((e) =>
            faker.lorem.text(),
          ),
        ),
      },
      {
        kode_penyakit: 'P7',
        nama_penyakit: 'Jamur putih',
        Solusi: JSON.stringify(
          [...Array(faker.number.int({ max: 10, min: 3 }))].map((e) =>
            faker.lorem.text(),
          ),
        ),
      },
      {
        kode_penyakit: 'P8',
        nama_penyakit: 'Bintik putih (White spot)',
        Solusi: JSON.stringify(
          [...Array(faker.number.int({ max: 10, min: 3 }))].map((e) =>
            faker.lorem.text(),
          ),
        ),
      },
      {
        kode_penyakit: 'P9',
        nama_penyakit: 'Gatal',
        Solusi: JSON.stringify(
          [...Array(faker.number.int({ max: 10, min: 3 }))].map((e) =>
            faker.lorem.text(),
          ),
        ),
      },
      {
        kode_penyakit: 'P10',
        nama_penyakit: 'Trematoda',
        Solusi: JSON.stringify(
          [...Array(faker.number.int({ max: 10, min: 3 }))].map((e) =>
            faker.lorem.text(),
          ),
        ),
      },
      {
        kode_penyakit: 'P11',
        nama_penyakit: 'Lernea sp.',
        Solusi: JSON.stringify(
          [...Array(faker.number.int({ max: 10, min: 3 }))].map((e) =>
            faker.lorem.text(),
          ),
        ),
      },
    ],
  });

  await prisma.gejala.createMany({
    data: [
      {
        //
        kode_Gejala: 'KG01',
        nama_Gejala: 'Borok pada kulit',
        nilai_ds: 0.3,
      },
      {
        //
        kode_Gejala: 'KG02',
        nama_Gejala: 'Pendarahan pada kulit',
        nilai_ds: 0.2,
      },
      {
        //
        kode_Gejala: 'KG03',
        nama_Gejala: 'Lemah',
        nilai_ds: 0.2,
      },
      {
        //
        kode_Gejala: 'KG04',
        nama_Gejala: 'Kurus',
        nilai_ds: 0.4,
      },
      {
        //
        kode_Gejala: 'KG05',
        nama_Gejala: 'Nafsu makan hilang',
        nilai_ds: 0.6,
      },
      {
        //
        kode_Gejala: 'KG06',
        nama_Gejala: 'Kulit gelap',
        nilai_ds: 0.2,
      },
      {
        //
        kode_Gejala: 'KG07',
        nama_Gejala: 'Kulit kasar',
        nilai_ds: 0.8,
      },
      {
        //
        kode_Gejala: 'KG08',
        nama_Gejala: 'Susah bernafas',
        nilai_ds: 0.9,
      },
      {
        //
        kode_Gejala: 'KG09',
        nama_Gejala: 'Infeksi kulit kepala, badan belakang, insang dan sirip',
        nilai_ds: 0.8,
      },
      {
        //
        kode_Gejala: 'KG10',
        nama_Gejala: 'Pendarahan pada daging',
        nilai_ds: 0.8,
      },
      {
        //
        kode_Gejala: 'KG11',
        nama_Gejala: 'Mata dan tubuh samping menonjol',
        nilai_ds: 0.9,
      },
      {
        //
        kode_Gejala: 'KG12',
        nama_Gejala: 'Luka kecil di kulit, lalu meluas ke daging',
        nilai_ds: 0.9,
      },
      {
        //
        kode_Gejala: 'KG13',
        nama_Gejala: 'Perut membengkak',
        nilai_ds: 0.6,
      },
      {
        //
        kode_Gejala: 'KG14',
        nama_Gejala: 'Hati bercak-bercak',
        nilai_ds: 0.9,
      },
      {
        //
        kode_Gejala: 'KG15',
        nama_Gejala:
          'Kepala, tutup insang dan sirip ditumbuhi benang halus seperti kapas',
        nilai_ds: 0.9,
      },
      {
        //
        kode_Gejala: 'KG16',
        nama_Gejala: 'KPada telur diliputi benang seperti kapas',
        nilai_ds: 0.7,
      },
      {
        //
        kode_Gejala: 'KG17',
        nama_Gejala: 'Sering muncul ke permukaan',
        nilai_ds: 0.8,
      },
      {
        //
        kode_Gejala: 'KG18',
        nama_Gejala: 'Timbul bintik putih pada sirip dan insang',
        nilai_ds: 0.9,
      },
      {
        //
        kode_Gejala: 'KG19',
        nama_Gejala: 'Ikan menggesekkan badannya pada benda keras',
        nilai_ds: 0.4,
      },
      {
        //
        kode_Gejala: 'KG20',
        nama_Gejala: 'Sirip rontok',
        nilai_ds: 0.9,
      },
      {
        //
        kode_Gejala: 'KG21',
        nama_Gejala:
          'Parasit menempel dan menusukkan diri pada tutup insang, sirip atau mata',
        nilai_ds: 0.8,
      },
      {
        //
        kode_Gejala: 'KG22',
        nama_Gejala: 'Bagian tutup insang, sirip atau mata mengalami luka',
        nilai_ds: 0.8,
      },
    ],
  });

  const [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11] =
    await prisma.penyakit.findMany({
      orderBy: { id_penyakit: 'asc' },
    });

  const [
    KG01,
    KG02,
    KG03,
    KG04,
    KG05,
    KG06,
    KG07,
    KG08,
    KG09,
    KG10,
    KG11,
    KG12,
    KG13,
    KG14,
    KG15,
    KG16,
    KG17,
    KG18,
    KG19,
    KG20,
    KG21,
    KG22,
  ] = await prisma.gejala.findMany({
    orderBy: { id_Gejala: 'asc' },
  });

  await prisma.rule_base.createMany({
    data: [
      {
        GejalaId: KG01.id_Gejala,
        penyakitId: P1.id_penyakit,
      },
      {
        GejalaId: KG01.id_Gejala,
        penyakitId: P4.id_penyakit,
      },
      {
        GejalaId: KG01.id_Gejala,
        penyakitId: P5.id_penyakit,
      },
      {
        GejalaId: KG02.id_Gejala,
        penyakitId: P1.id_penyakit,
      },
      {
        GejalaId: KG02.id_Gejala,
        penyakitId: P2.id_penyakit,
      },
      {
        GejalaId: KG02.id_Gejala,
        penyakitId: P4.id_penyakit,
      },
      {
        GejalaId: KG02.id_Gejala,
        penyakitId: P5.id_penyakit,
      },
      {
        GejalaId: KG03.id_Gejala,
        penyakitId: P1.id_penyakit,
      },
      {
        GejalaId: KG03.id_Gejala,
        penyakitId: P2.id_penyakit,
      },
      {
        GejalaId: KG03.id_Gejala,
        penyakitId: P8.id_penyakit,
      },
      {
        GejalaId: KG03.id_Gejala,
        penyakitId: P9.id_penyakit,
      },
      {
        GejalaId: KG04.id_Gejala,
        penyakitId: P1.id_penyakit,
      },
      {
        GejalaId: KG04.id_Gejala,
        penyakitId: P9.id_penyakit,
      },
      {
        GejalaId: KG04.id_Gejala,
        penyakitId: P10.id_penyakit,
      },
      {
        GejalaId: KG05.id_Gejala,
        penyakitId: P1.id_penyakit,
      },
      {
        GejalaId: KG05.id_Gejala,
        penyakitId: P3.id_penyakit,
      },
      {
        GejalaId: KG06.id_Gejala,
        penyakitId: P2.id_penyakit,
      },
      {
        GejalaId: KG06.id_Gejala,
        penyakitId: P5.id_penyakit,
      },
      {
        GejalaId: KG06.id_Gejala,
        penyakitId: P6.id_penyakit,
      },
      {
        GejalaId: KG06.id_Gejala,
        penyakitId: P10.id_penyakit,
      },
      {
        GejalaId: KG07.id_Gejala,
        penyakitId: P2.id_penyakit,
      },
      {
        GejalaId: KG08.id_Gejala,
        penyakitId: P2.id_penyakit,
      },
      {
        GejalaId: KG09.id_Gejala,
        penyakitId: P3.id_penyakit,
      },
      {
        GejalaId: KG10.id_Gejala,
        penyakitId: P4.id_penyakit,
      },
      {
        GejalaId: KG11.id_Gejala,
        penyakitId: P5.id_penyakit,
      },
      {
        GejalaId: KG12.id_Gejala,
        penyakitId: P5.id_penyakit,
      },
      {
        GejalaId: KG13.id_Gejala,
        penyakitId: P6.id_penyakit,
      },
      {
        GejalaId: KG14.id_Gejala,
        penyakitId: P6.id_penyakit,
      },
      {
        GejalaId: KG15.id_Gejala,
        penyakitId: P7.id_penyakit,
      },
      {
        GejalaId: KG16.id_Gejala,
        penyakitId: P7.id_penyakit,
      },
      {
        GejalaId: KG17.id_Gejala,
        penyakitId: P8.id_penyakit,
      },
      {
        GejalaId: KG18.id_Gejala,
        penyakitId: P8.id_penyakit,
      },
      {
        GejalaId: KG19.id_Gejala,
        penyakitId: P8.id_penyakit,
      },
      {
        GejalaId: KG19.id_Gejala,
        penyakitId: P9.id_penyakit,
      },
      {
        GejalaId: KG19.id_Gejala,
        penyakitId: P10.id_penyakit,
      },
      {
        GejalaId: KG20.id_Gejala,
        penyakitId: P10.id_penyakit,
      },
      {
        GejalaId: KG21.id_Gejala,
        penyakitId: P11.id_penyakit,
      },
      {
        GejalaId: KG22.id_Gejala,
        penyakitId: P11.id_penyakit,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
