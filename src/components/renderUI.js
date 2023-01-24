export const RenderUI = function ({user}) {

  if(!user)return 
    return (
      <div>
        <span className="profile center mt-4">
          <img src={user.avatar_url} alt={user.login} />
        </span>
        <div className="center">
          <h3 className="text-xl font-semibold mt-4">User Information</h3>
          <div className="flex gap-8  w-60 sm:w-96 justify-between ">
            <span>
              <div className="text-2xl  text-slate-400">Username</div>
              <h4 className="text-center font-bold capitalize text-xl">
                {user.login}
              </h4>
            </span>
  
            <span>
              <div className="text-2xl  text-slate-400 ">Followers</div>
              <h4 className="text-center font-bold capitalize text-xl">
                {user.followers}
              </h4>
            </span>
          </div>
  
          <h3 className="text-xl font-semibold mt-4">Social Information</h3>
          <div className="flex gap-8  w-60 sm:w-96 justify-between">
            <span>
              <div className="text-2xl  text-slate-400">Twitter</div>
              <h4 className="text-center font-bold capitalize text-xl">
                {user.twitter_username}
              </h4>
            </span>
  
            <span>
              <div className="text-2xl  text-slate-400">Following</div>
              <h4 className="text-center font-bold capitalize text-xl">
                {user.following}
              </h4>
            </span>
          </div>
          <div className="flex gap-8  w-60 sm:w-96 justify-between">
            <span>
              <div className="text-2xl  text-slate-400">Location</div>
              <h4 className="text-center font-bold capitalize text-xl">
                {user.location}
              </h4>
            </span>
  
            <span>
              <div className="text-2xl  text-slate-400">Email</div>
              <h4 className="text-center font-bold capitalize text-xl">
                {user.email}
              </h4>
            </span>
          </div>
  
          <a
            target="_blank"
            className="bg-slate-400 text-white py-3 px-5 rounded-4xl mt-4"
            rel="noreferrer"
            href={`https://github.com/${user.login}`}
          >
            GitHub
          </a>
        </div>
      </div>
    );

    
 
};

