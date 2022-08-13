import React from "react";
import constants from "../constants/constants";
import Home from "../pages/home/home";
import Campaign from "../pages/campaign/campaignlisting";
import SearchResult from "../pages/SearchResult/SearchResult";
import TopicDetailsPage from "../pages/TopicDetailsPage/TopicDetailsPage";
import Articlelisting from "../pages/ArticleListing/ArticleListing";
import AddCampaigns from "../pages/Campaigns/AddCampaigns";
import AllCampaigns from "../pages/Campaigns/AllCampaigns";
import AllPosts from "../pages/Posts/AllPost";
import CreatePost from "../pages/Posts/CreatePost";
import Profile from "../pages/profile/profile";
import Member from "../pages/adminMembers/Member";
import ConservationTopics from "../pages/ConservationTopics/ConservationTopics";
import AccessLayout from "../pages/accesslog/AccessLayout";
import AccountLayout from "../pages/account/AccountLayout";
import NotificationLayout from "../pages/Notifications/NotificationLayout";
import CampaignDetails from "../pages/campaignDetails/CampaignDetails";
import GalleryList from "../pages/gallery/galleryList";
import Landscape from "../pages/landscape/landscapeListing";
import Event from "../pages/event/eventListing";
import Essential from "../pages/essentialTips/essentialTipsListing";
import GalleryDetails from "../pages/galleryDetails/galleryDetails";
import VideoList from "../pages/videoList/videoList";
import FeaturedList from "../pages/featured/featured";
import LandscapeDetails from "../pages/LandscapeDetails/LandscapeDetails";
import VideoDetails from "../pages/videodetails/videodetails";
import EssentialDetails from "../pages/essentialdetails/essentialdetails";
import ArticleDetails from "../pages/articleDetails/articleDetails";
const {
  ROUTE: {
    HOME_PAGE,
    TOPIC_PAGE,
    ARTICLES_PAGE,
    CAMPAIGN_PAGE,
    CAMPAIGN_DETAILS,
    GALLERY_PAGE,
    ESSENTIAL,
    PROFILE,
    ALL_POSTS,
    ADD_POSTS,
    ADD_CAMPAIGNS,
    ALL_CAMPAIGNS,
    NOTIFICATIONS,
    ACCESSLOG,
    LANDSCAPE_PAGE,
    TOPIC_DETAILS,
    EVENT_PAGE,
    SEARCH_PAGE,
    MEMBER,
    ACCOUNT,
    GALLERY_DETAILS,
    VIDEOLIST,
    FEATUREDLIST,
    LANDSCAPE_DETAILS,
    VIDEO_DETAILS,
    ESSENTIAL_DETAILS,
    ARTICLE_DETAILS,
  },
} = constants;
const dynamicRouteData = [
  {
    title: "Home",
    content: <Home />,
    route: HOME_PAGE,
  },
  {
    title: "Topic",
    content: <ConservationTopics />,
    route: TOPIC_PAGE,
  },
  {
    title: "Topic Details",
    content: <TopicDetailsPage />,
    route: TOPIC_DETAILS,
  },
  {
    title: "Search",
    content: <SearchResult />,
    route: SEARCH_PAGE,
  },
  {
    title: "ArticleList",
    content: <Articlelisting />,
    route: ARTICLES_PAGE,
  },
  {
    title: "Campaign",
    content: <Campaign />,
    route: CAMPAIGN_PAGE,
  },
  {
    title: "Gallery",
    content: <GalleryList />,
    route: GALLERY_PAGE,
  },
  {
    title: "Campaign Details",
    content: <CampaignDetails />,
    route: CAMPAIGN_DETAILS,
  },
  {
    title: "Essential",
    content: <Essential />,
    route: ESSENTIAL,
  },
  {
    title: "Profile",
    content: <Profile />,
    route: PROFILE,
  },
  {
    title: "AllPosts",
    content: <AllPosts />,
    route: ALL_POSTS,
  },
  {
    title: "CreatePost",
    content: <CreatePost />,
    route: ADD_POSTS,
  },
  {
    title: "AddCampaigns",
    content: <AddCampaigns />,
    route: ADD_CAMPAIGNS,
  },
  {
    title: "AllCampaigns",
    content: <AllCampaigns />,
    route: ALL_CAMPAIGNS,
  },
  {
    title: "NotificationLayout",
    content: <NotificationLayout />,
    route: NOTIFICATIONS,
  },
  {
    title: "AccessLayout",
    content: <AccessLayout />,
    route: ACCESSLOG,
  },
  {
    title: "Member",
    content: <Member />,
    route: MEMBER,
  },
  {
    title: "AccountLayout",
    content: <AccountLayout />,
    route: ACCOUNT,
  },
  {
    title: "Landscape",
    content: <Landscape />,
    route: LANDSCAPE_PAGE,
  },
  {
    title: "Event",
    content: <Event />,
    route: EVENT_PAGE,
  },
  {
    title: "Event",
    content: <GalleryDetails />,
    route: GALLERY_DETAILS,
  },
  {
    title: "Event",
    content: <VideoList />,
    route: VIDEOLIST,
  },
  {
    title: "Event",
    content: <FeaturedList />,
    route: FEATUREDLIST,
  },
  {
    title: "LandscapeDetails",
    content: <LandscapeDetails />,
    route: LANDSCAPE_DETAILS,
  },
  {
    title: "VideoDetails",
    content: <VideoDetails />,
    route: VIDEO_DETAILS,
  },
  {
    title: "EssentialDetails",
    content: <EssentialDetails />,
    route: ESSENTIAL_DETAILS,
  },
  {
    title: "Event",
    content: <ArticleDetails />,
    route: ARTICLE_DETAILS,
  },
];
export default dynamicRouteData;
