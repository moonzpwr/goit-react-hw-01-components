import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statictics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './JSONs/user.json';
import statisticalData from './JSONs/statistical-data.json';
import friends from './JSONs/friends.json';
import transaction from './JSONs/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transaction} />
    </div>
  );
}
