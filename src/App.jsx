import React from "react";
import DataImage, { listProyek, listTools } from "./data";
import { socialMediaLinks } from "./data";
function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md "
              loading="lazy"
            />
            <q>Kode yang indah, lahir dengan ketekunan.😁</q>
          </div>
          <h1 className="text-5xl/tight mb-6 font-bold">
            Hi, I'm <span className="text-green-500">Alif</span>
          </h1>
          <h1 className="text-5xl/tight mb-6 font-bold">
            A Frontend Developer
          </h1>
          <p className="text-base/loose text-zinc-400 font-bold mb-6 text-justify">
            I am a Frontend Developer with a passion for creating beautiful and
            functional web applications. I have experience in HTML, CSS,
            JavaScript, and React. I am always eager to learn new technologies
            and improve my skills.
          </p>

          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-8">
          <img
            src="/assets/blackhole.png"
            alt="Image"
            className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
            loading="lazy"
          />
        </div>
      </div>

      {/* About */}
      <div className="about mt-32 py-10" id="about">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex text-2xl uppercase font-bold">
            <h1>about me</h1>
          </div>
          <p className="text-base/loose mb-10 mt-4 text-justify">
            👋 Hello! I'm Alif Danang PInangkis, but feel free to call me Alif.
            I'm a fresh graduate with a Bachelor's degree in Informatics from
            Universitas Teknokrat Indonesia, and I'm currently based in Lampung
            Tengah. 🚀 I've honed my skills in JavaScript and web development,
            with a deep passion for creating responsive, interactive websites.
            My goal? To grow as a Full Stack Developer and dive into the latest
            web technologies, bringing innovative ideas to life. 🚀
            <p className="mt-4">
              Armed with both practical experience and a thirst for learning,
              I'm ready to dive into real-world projects, collaborate with
              talented teams, and help bring innovative digital ideas to life.
              💻💡 Feel free to check out my socials and projects—let's connect
              and create something awesome! 🎉
              <p className="mt-4">
                Let's connect! 👇 Feel free to reach out to me at
                alifdanangp07@gmail.com or find me on social media and let's
                make something great happen! 🎉
              </p>
            </p>
          </p>
          <div
            className="flex flex-wrap items-center justify-center gap-10 mt-6 px-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {socialMediaLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
                className="transition transform hover:scale-110 hover:drop-shadow-md duration-300"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-12 rounded-md"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>

        {/* tools */}
        <div className="tools mt-32" id="tools">
          <h1
            className="text-4xl/snug font-bold mb-4 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tools yang dipakai
          </h1>
          <p
            className="w-2/3 text-base/loose opacity-50 text-center mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
            website ataupun design
          </p>
          <div className="tools-box mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {listTools.map((tool) => (
              <a
                key={tool.nama}
                href={tool.link}
                target="_blank"
                rel="noreferrer noopener"
                className=""
              >
                <div
                  className="flex flex-col text-center p-3 border border-zinc-800 rounded-lg hover:bg-zinc-900 transition duration-300 hover:scale-105 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-14 bg-zinc-800 p-1 mb-2"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {tool.nama}
                    </h4>
                    <p className="text-xs opacity70">{tool.ket}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* project */}
      <div className="project mt-32 py-10" id="project">
        <h1
          className="text-center font-bold text-4xl mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Project
        </h1>
        <p
          className="text-base/loose opacity-50 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Berikut ini beberapa project yang saya buat.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              key={proyek.id}
            >
              <img
                src={proyek.gambar}
                alt={proyek.nama}
                className="w-full h-auto"
                loading="lazy"
              />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <span
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-violet-700 p-3 rounded-lg border border-zinc-600 hover:bg-violet-600 transition duration-300"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="contact mt-32 sm:p-10 p-0" id="contact">
        <h1
          className="text-center font-bold text-4xl mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Contact
        </h1>
        <p
          className="text-base/loose opacity-50 text-center mb-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Mari terhubung dengan saya
        </p>
        <form
          action="https://formsubmit.co/alifdanangp07@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 w-full mx-auto rounded-md sm:w-fit"
          data-aos="fade-up"
          data-aos-duration="1000"
          autoComplete="off"
        >
          <div className="flex flex-col gap-4">
            <div
              className="flex flex-col gap-2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama..."
                className="border border-zinc-700 p-2 rounded-md bg-zinc-800 text-white"
                required
              />
            </div>
            <div
              className="flex flex-col gap-2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email..."
                className="border border-zinc-700 p-2 rounded-md bg-zinc-800 text-white"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="pesan"
                className="font-semibold"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="50"
                rows="7"
                placeholder="pesan... "
                className="border border-zinc-700 p-2 rounded-md bg-zinc-800 text-white"
                data-aos="fade-up"
                data-aos-duration="1000"
                required
              ></textarea>
            </div>
            <div
              className="text-center mt-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            ></div>
            <div>
              <button
                type="submit"
                className="font-semibold  bg-violet-700 p-3 rounded-lg border border-zinc-600 hover:bg-violet-600 transition duration-300 w-full cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
