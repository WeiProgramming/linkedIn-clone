import React, {useState, useEffect} from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Post from '../post/Post';
import {db} from '../../firebase';
import InputOption from './InputOption';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import {selectUser} from '../../features/userSlice'
import FlipMove from 'react-flip-move'

function Feed() {
    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState([])
    
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })
            ));
        })
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput("")
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title='Photo' Icon={ImageIcon} color="#70B5F9"></InputOption>
                    <InputOption title='Video' Icon={SubscriptionsIcon} color="#E7A33E"></InputOption>
                    <InputOption title='Event' Icon={EventNoteIcon} color="#C0CBCD"></InputOption>
                    <InputOption title='Write article' Icon={CalendarViewDayIcon} color="#7FC15E"></InputOption>

                </div>
            </div>
                {/* Posts */}
                <FlipMove>

                
                {posts.map(({id, data:{name, description, message, photoUrl}}) => {
                    return <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl}/>
                })}
                </FlipMove>
            </div>
    )
}

export default Feed
