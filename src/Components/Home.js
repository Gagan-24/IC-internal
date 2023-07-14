import React from 'react'

const Home = () => {
  return (
    <>
    <h1>Welcome to our G Square</h1>
    <div class="container">
        <div className="row">
            <div class="col">
                <div class="card border bg-dark">
                    <div class="card-header bg-secondary pb-4 mt-1 mb-1 me-1 ms-1 text-center text-white">
                        <img src="https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                alt=""
                                width="100%"
                                  >
                        </img>
                    </div>
                    <div class="card-body bg-info mb-1 me-1 ms-1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit consequat diam, ornare pretium turpis egestas id. Mauris ultricies ullamcorper metus non egestas. Mauris id congue purus, vel euismod ipsum. Donec lectus tortor, auctor convallis posuere vel, porta lobortis ante. In et urna et felis eleifend elementum non et nulla. Nam cursus, nunc ultrices molestie tincidunt, quam purus pellentesque velit.

                        </p>
                    </div>
                    <div class="card-footer bg-secondary pb-4 mb-1 me-1 ms-1 text-center text-white">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit consequat diam, ornare pretium turpis egestas id. Mauris ultricies ullamcorper metus non egestas. Mauris id congue purus, vel euismod ipsum. Donec lectus tortor, auctor convallis posuere vel, porta lobortis ante. In et urna et felis eleifend elementum non et nulla. Nam cursus, nunc ultrices molestie tincidunt, quam purus pellentesque velit.
                        
                    </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Home;
