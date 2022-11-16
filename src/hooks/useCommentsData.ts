import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { howLong } from "../utils/js/howLong";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

export interface IComment {
  author?: string;
  body?: string;
  created?: number;
  id?: string;
  parent_id?: string;
}

export function useCommentsData(postId: string | undefined) {
  const token = useSelector<RootState, string>((state) => state.token);
  const [commentsData, setCommentsData] = useState<IComment[]>([{}]);

  useEffect(() => {
    if (token !== "undefined" && token !== "") {
      axios
        .get(
          `https://oauth.reddit.com/comments/${postId}.json?sr_detail=true&limit=20`,
          {
            headers: { Authorization: `bearer ${token}` },
          }
        )
        .then((resp) => {
          const commentsResp = resp.data;
          const commentsChildren = commentsResp[1].data.children;

          type childType = typeof commentsChildren[0];
          const commentsList = commentsChildren.map((child: childType) => {
            return {
              author: child.data.author,
              body: child.data.body,
              created: howLong(child.data.created_utc),
              id: child.data.id,
              parent_id: child.data.parent_id,
            };
          });
          setCommentsData(commentsList);
        })
        .catch(console.log);
    }
  }, [token]);

  return [commentsData];
}
