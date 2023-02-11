import { html } from "@arrow-js/core"

import Header from "./components/header"
import TrackCard from "./components/track-card"
import {
  BankIcon,
  GameControllerIcon,
  GraduationCapIcon,
  HeartbeatIcon,
} from "./components/icons"
import Link from "./components/link"

import "./scripts/starfield"
import "./scripts/fade"

Header(document.getElementById("header"))

const tracks = [
  {
    icon: GraduationCapIcon,
    name: "Education",
    description:
      "Exploring the ways that Education Technology can augment learning",
    questions: [
      "How can we use tech to support students of all backgrounds and enable universal access to quality education?",
      "Schools in Hong Kong are going back to face-to-face classes. What tools from remote learning can be adapted and brought into the in-person classroom?",
      "How can we use technology to facilitate collaboration in school(s)?",
    ],
    resources: [
      Link("https://aws.amazon.com/training/awsacademy/", "AWS Academy"),
      Link("https://aws.amazon.com/education/awseducate/", "AWS Educate"),
      Link("https://canvas.instructure.com/doc/api/", "Canvas LMS API"),
      Link("https://github.com/ManimCommunity/manim/", "Manim"),
      Link("https://developers.google.com/classroom", "Google Classroom API"),
      Link(
        "https://developer.blackboard.com/portal/displayApi",
        "Blackboard API"
      ),
      Link("https://developer.vimeo.com/", "Vimeo API"),
    ],
  },
  {
    icon: BankIcon,
    name: "FinTech",
    description: "Analyze the stock market, improve the banking experience",
    questions: [
      "How do the elderly use FinTech to improve their investment and banking experience?",
      "How could FinTech help with protecting the environment?",
      "How to encourage teenagers to save for tomorrow with FinTech?",
    ],
    resources: [
      Link("https://www.difitek.com/", "Difitek"),
      Link("https://plaid.com/", "Plaid"),
      Link(
        "https://www.yodlee.com/financial-products/api-apps-data",
        "Yodlee API"
      ),
      Link(
        "https://developer.intuit.com/app/developer/homepage",
        "Intuit Developer"
      ),
    ],
  },
  {
    icon: GameControllerIcon,
    name: "Entertainment",
    description:
      "Exploring the ways that we create, consume, and share content",
    questions: [
      "How can entertainment be used to share a message/solve a problem?",
      "How can we incorporate physical components or outside interaction into software?",
      "How can we focus and expand on UI and UX to enhance a user's takeaway from technology?",
    ],
    resources: [
      Link(
        "https://developer.spotify.com/documentation/web-api/",
        "Spotify API"
      ),
      Link("https://developer.imdb.com/", "IMDB API"),
      Link("https://steamcommunity.com/dev", "Steam API"),
      Link("https://developer.twitter.com/en/docs/twitter-api", "Twitter API"),
      Link("https://developer.vimeo.com/", "Vimeo API"),
    ],
  },
  {
    icon: HeartbeatIcon,
    name: "Healthcare",
    description: "How can we encourage people to maintain a healthy lifestyle",
    questions: [
      "How can we make health services more accessible and affordable?",
      "How can we encourage people to maintain healthy sleeping, activity, eating, etc. habits?",
      "How can we make diagnosing illnesses more accurate and easier?",
    ],
    resources: [
      Link(
        "https://console.cloud.google.com/marketplace/details/bigquery-public-datasets/covid19-public-data-program?_ga=2.61852266.-790027792.1588625217&pli=1",
        "Google Cloud"
      ),
      Link("http://api.citybik.es/v2/?ref=public-apis", "City Bikes API"),
      Link("https://wonder.cdc.gov/Welcome.html", "CDC WONDER"),
      Link(
        "https://apps.who.int/gho/data/node.resources",
        "World Health Organization (WHO)"
      ),
      Link("https://healthcare.ai/software/", "Healthcare.ai"),
      Link("https://hcup-us.ahrq.gov/databases.jsp", "HCUP"),
      Link("https://dev.fitbit.com/build/", "FitBit"),
      Link("https://openneuro.org/", "OpenNEURO"),
      Link("https://healthdata.gov/", "HealthData.gov"),
      Link("https://seer.cancer.gov/data-software/", "SEER"),
      Link("https://www.re3data.org/", "R3 Data"),
    ],
  },
]

html` ${tracks.map((e) => TrackCard(e))} `(document.getElementById("tracks"))
