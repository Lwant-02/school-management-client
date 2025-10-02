import axios from "axios";

export const fetchEvents = async (): Promise<NewsAndEvents[]> => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/events"
    );
    return response.data.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchTeachers = async (): Promise<Teacher[]> => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/teachers"
    );
    return response.data.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchSubjects = async (): Promise<Subjects[]> => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/subjects"
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchTimeTable = async (): Promise<TimetableCardProps[]> => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/timetables"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchLabs = async (): Promise<Labs[]> => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/labs");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
