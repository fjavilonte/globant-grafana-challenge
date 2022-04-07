import { useEffect, useState } from 'react';

import axios from 'axios';

import { useGlobalState } from '../context/alarmscontext';
import { toastError } from '../helpers/toasts';

const URL = process.env.REACT_APP_FAKE_SERVER_URL;
const countUrl = `${process.env.REACT_APP_FAKE_SERVER_URL}/alarms/count`;

const useAlarmList = (params) => {
  const [state, setState] = useGlobalState();
  const [isLoading, setIsLoading] = useState(true);

  const getAlarmList = async () => {
    setIsLoading(true);
    try {
      const requests = [`${URL}/${params}`, countUrl].map(
        (endPoint) =>
          axios({
            method: 'get',
            url: endPoint,
            headers: {
              'Content-Type': 'application/json',
            },
          }).catch((err) => {
            console.log(err, 'something went wrong');
            setIsLoading(false);
          })
      );
      const [alarmList, count] = await axios.all(requests);
      if (alarmList && count) {
        setState({
          ...state,
          alarms: alarmList.data,
          totalAlarmsCount: alarmList.data.length,
          activeAlarmsCount: count.data,
        });
      }
    } catch (error) {
      toastError('Something Went wrong fetching the list!');
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => getAlarmList(), [params]);

  return [isLoading];
};

export default useAlarmList;
