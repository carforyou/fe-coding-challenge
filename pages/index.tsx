import React from "react"
import { NextPage } from "next"

const Index: NextPage<{}> = () => {
  return (
    <div className="max-w-4xl m-auto space-y-5 my-3">
      <h1 className="text-center font-extrabold text-3xl">
        Welcome to the challenge
      </h1>
      <section className="space-y-5">
        <h2 className="font-bold text-xl">Glossary</h2>
        <div className="space-y-1">
          <div className="flex flex-row flex-wrap p-1 bg-gray-400">
            <div className="font-bold w-1/4 md:w-1/6">Make</div>
            <div className="w-3/4 md:w-1/2">is a brand of car</div>
            <div className="italic w-full md:w-1/3">e.g. Volkswagen</div>
          </div>
          <div className="flex flex-row flex-wrap p-1">
            <div className="font-bold w-1/4 md:w-1/6 ">Model</div>
            <div className="w-3/4 md:w-1/2">
              is a particular model of a brand
            </div>
            <div className="italic w-full md:w-1/3">e.g. Golf</div>
          </div>
          <div className="flex flex-row flex-wrap p-1 bg-gray-400">
            <div className="font-bold w-1/4 md:w-1/6">Listing</div>
            <div className="w-3/4 md:w-1/2">
              is an advertisement on the platform, <br />
              it holds information about the car (production year, engine size,
              drive type, fuel type, amount of doors, options, mileage, etc.),
              as well as the information relevant for the ad itself (e.g. price)
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-5">
        <h2 className="font-bold text-xl">Description</h2>
        <p>
          One of the most popular way of browsing cars is filtering by make and
          model. To be able to select a model the user needs to provide a make
          first.
        </p>
        <p>
          As a user, I would like to see cars of the make and model I&apos;m
          interested in.
        </p>
        <h3 className="font-semibold text-lg">The flow</h3>
        <p>
          At first, the user needs to choose a <strong>Make</strong>. The select
          should provide{" "}
          <a
            href="https://inventory-search-service.preprod.carforyou.ch/swagger-ui/index.html#/Current%20Makes%2FModels/getCurrentMakesUsingGET"
            target="_blank"
            rel="noreferrer"
            className="underline text-indigo-700"
          >
            all for which there currently are listings on the platform
          </a>{" "}
          as valid options. See{" "}
          <a
            href="#fig-1"
            className="text-indigo-700 border-current border-dashed border-b"
          >
            Fig. 1
          </a>{" "}
          and{" "}
          <a
            href="#fig-2"
            className="text-indigo-700 border-current border-dashed border-b"
          >
            Fig. 2
          </a>{" "}
          below.
        </p>
        <p>
          Next step is to select the model. Initially, the model select is
          disabled (see{" "}
          <a
            href="#fig-1"
            className="text-indigo-700 border-current border-dashed border-b"
          >
            Fig. 1
          </a>
          ), after the make is selected all models of the chosen make should
          become available as options (
          <a
            href="#fig-3"
            className="text-indigo-700 border-current border-dashed border-b"
          >
            Fig. 3
          </a>
          ) - they can be fetched from{" "}
          <a
            href="https://inventory-search-service.preprod.carforyou.ch/swagger-ui/index.html#/Current%20Makes%2FModels/getCurrentModelsUsingGET"
            target="_blank"
            rel="noreferrer"
            className="underline text-indigo-700"
          >
            the search service.
          </a>
          . If the make select is cleared model select should return to its
          default state.
        </p>
        <p>
          After choosing the model, we have enough information to proceed to the
          next step - listing search. Please provide a visual confirmation to
          the user that they can continue the process. On{" "}
          <a
            href="#fig-4"
            className="text-indigo-700 border-current border-dashed border-b"
          >
            Fig. 4
          </a>{" "}
          we decided to show a number of listings available on the platform, but
          any other visual feedback is good too.
        </p>
        <div className="flex flex-wrap">
          <figure
            className="w-full md:w-1/2 p-3 flex flex-col justify-between"
            id="fig-1"
          >
            <img
              className="m-auto"
              src={require("~/assets/images/empty.png")}
            />
            <figcaption className="text-center">
              <strong>Fig. 1</strong>&nbsp;-&nbsp;
              <span className="italic">Empty state</span>
            </figcaption>
          </figure>
          <figure
            className="w-full md:w-1/2 p-3 flex flex-col justify-between"
            id="fig-2"
          >
            <img
              className="m-auto"
              src={require("~/assets/images/makeSelect.png")}
            />
            <figcaption className="text-center">
              <strong>Fig. 2</strong>&nbsp;-&nbsp;
              <span className="italic">Make select</span>
            </figcaption>
          </figure>
          <figure
            className="w-full md:w-1/2 p-3 flex flex-col justify-between"
            id="fig-3"
          >
            <img
              className="m-auto"
              src={require("~/assets/images/modelSelect.png")}
            />
            <figcaption className="text-center">
              <strong>Fig. 3</strong>&nbsp;-&nbsp;
              <span className="italic">Model select</span>
            </figcaption>
          </figure>
          <figure
            className="w-full md:w-1/2 p-3 flex flex-col justify-between"
            id="fig-4"
          >
            <img
              className="m-auto"
              src={require("~/assets/images/count.png")}
            />
            <figcaption className="text-center">
              <strong>Fig. 4</strong>&nbsp;-&nbsp;
              <span className="italic">Listings count</span>
            </figcaption>
          </figure>
        </div>
        <p>
          <strong>Note: </strong>
          Please treat the above images as guidelines and wireframes, not as
          design and requirements. The challenge is quite open, and it&apos;s up
          to you how far you&apos;d like to go.
        </p>
      </section>
      <section className="space-y-5">
        <h2 className="font-bold text-xl">Requirements</h2>
        <p>
          Please edit the existing application and create{" "}
          <code className="bg-gray-400">MakeModelSelect</code> component and a
          page where it is displayed. It is up to you to structure the code and
          choose the tools. It is okay to use libraries. Do not hesitate to
          reach out to us if you have any questions.
        </p>
        <p>
          We are aware that front-end development is quite broad nowadays;
          therefore, the challenge is quite open too. If you prefer to focus on
          creating beautiful visuals and/or custom input fields - great. If
          you&apos;d rather create the most-amazing API layer it&apos;s great
          too - a native select is good enough.
        </p>
        <p>
          Please invest <strong>a maximum of 3-4 hours.</strong> We understand
          we’re asking for a substantial amount of your time. It’s fine to stop
          earlier. Also, don’t sweat it if you’re not 100% happy with the result
          when the time is over.
        </p>
        <p>
          When you finish, please send us the archived project (do not submit a
          pull request - the repository is public so your solution would be
          visible to everyone). We would do a code review which will be a basis
          for a follow-up call. We will give you feedback and discuss your code.
        </p>
      </section>
    </div>
  )
}

export default Index
