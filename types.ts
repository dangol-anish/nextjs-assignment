
export interface APODItem {
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    title: string;
    url: string;
  }

  export interface APODResponse {
    items: APODItem[]; 
  }


  export interface MainPageContentProps {
    data: APODItem[];
    loading: boolean;

  }