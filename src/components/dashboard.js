import React from 'react'
import AppLogo from '../assets/IN-D-FS-AppLogo.png'
import dashboard from '../assets/dashboard.svg'
import AccountImg from '../assets/account_img.png'

function Dashboard_page() {
    return (
        <section>

        <div class="row mr-0">
            <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 pr-0">
                <div class="dash_board_side_nav">
                    <div class="text-center"><img src={AppLogo}/></div>
                    <div class="text-center"><img src={dashboard}/></div>
                </div>

            </div>
            <div class="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-xs-11 dashboard_body ">
                <div class="row">
                    <div class="dashboard_bg mb-2">
                        <p>Dashboard</p>
                    </div>
                </div>
                <div class="row dashboard_account_info">
                    <div class="dashboard_bg dashboard_account_info_bg p-2 d-flex">
                        <div class="d-flex">
                            <div class="account_img">
                                <img src={AccountImg}/>
                            </div>
                            <div class="account_img_header">
                                <p>Welcome to Video KYC</p>
                                <span>Rebin J Anselm <span class="dot"></span><span>Last login : <span>1 day ago</span></span>
                                </span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <p class=" mr-2">Counter</p>
                            <div class="onoffswitch">
                                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked />
                                <label class="onoffswitch-label" for="myonoffswitch">
                                    <span class="onoffswitch-inner"></span>
                                    <span class="onoffswitch-switch"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex mt-3 mb-3 pl-0 pr-0">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 pl-0">
                            {/* <!-- Card --> */}
                            <div class="card">

                                {/* <!-- Card content --> */}
                                <div class="card-body">
                                    <div class="d-flex card_aligment">
                                        <div class="d-flex">
                                            <div class="d-flex over_all_calls">
                                                <div class="over_all_calls_icon mr-2 d-flex align-items-center justify-content-center ico_color"><i class="fa fa-phone" aria-hidden="true"></i></div>
                                                <div class="over_all_calls_content">
                                                    <p class="mb-0">Over all Calls</p>
                                                    <span>This Month</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="total_count">
                                            <p>2586</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- Card --> */}
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                            {/* <!-- Card --> */}
                            <div class="card ">

                                {/* <!-- Card content --> */}
                                <div class="card-body">
                                    <div class="d-flex card_aligment">
                                        <div class="d-flex">
                                            <div class="d-flex over_all_calls">
                                                <div class="over_all_calls_icon mr-2 d-flex align-items-center justify-content-center ico_color"><i class="fa fa-phone" aria-hidden="true"></i></div>
                                                <div class="over_all_calls_content">
                                                    <p class="mb-0">No of Calls</p>
                                                    <span>Today</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="total_count">
                                            <p>2586</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- Card --> */}
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 pr-0">
                            {/* <!-- Card --> */}
                            <div class="card">

                                {/* <!-- Card content --> */}
                                <div class="card-body">
                                    <div class="d-flex card_aligment">
                                        <div class="d-flex">
                                            <div class="d-flex over_all_calls">
                                                <div class="over_all_calls_icon mr-2 d-flex align-items-center justify-content-center ico_color"> <i class="fa fa-exclamation-circle" aria-hidden="true"></i></div>
                                                <div class="over_all_calls_content">
                                                    <p class="mb-0">Faild KYC</p>
                                                    <span>Today</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="total_count">
                                            <p>2586</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- Card --> */}
                        </div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 pl-0 pr-0 mt-4">
                        <p>Calles list - Today</p>
                            {/* <!-- Card --> */}
                            <div class="card">
                                
                                {/* <!-- Card content --> */}
                                <div class="card-body p-0">
                                 <div class="table-responsive text-nowrap">

  <table class="table">
    <thead>
      <tr class="th_bg">
        <th scope="col">User</th>
        <th scope="col" class="text-center">Geo Tagging</th>
        <th scope="col" class="text-center">Liveliness Test</th>
        <th scope="col" class="text-center">DB Validator</th>
        <th scope="col" class="text-center">Face Matching</th>
        <th scope="col" class="text-center">Agent Verification</th>
        <th scope="col" class="text-center">Timestamp</th>
       
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="d-flex align-items-center"><div class="user_name mr-1">JS</div><div class="user_name_content">Jone Smith</div></th>
        <td class="text-center"><i class="fa fa-check check_color" aria-hidden="true" ></i></td>
        <td class="text-center"><i class="fa fa-check check_color" aria-hidden="true" ></i></td>
        <td class="text-center"><i class="fa fa-check check_color" aria-hidden="true" ></i></td>
        <td class="text-center"><i class="fa fa-check check_color" aria-hidden="true" ></i></td>
        <td class="text-center"><i class="fa fa-check check_color" aria-hidden="true" ></i></td>
        <td class="text-center d-flex align-items-center pading_date"><span class="mr-1 date_time">2020-02-03</span><span class="date_time">10:02:21 IST</span></td>

      </tr>
      <tr>
        <th scope="row" class="d-flex align-items-center"><div class="user_name mr-1">JS</div><div class="user_name_content">Jone Smith</div></th>
        <td class="text-center"><i class="fa fa-check check_color" aria-hidden="true" ></i></td>
        <td class="text-center"><i class="fa fa-check check_color" aria-hidden="true" ></i></td>
        <td class="text-center"><i class="fa fa-check check_color" aria-hidden="true" ></i></td>
        <td class="text-center"><i class="fa fa-check check_color" aria-hidden="true" ></i></td>
        <td class="text-center"><i class="fa fa-check check_color" aria-hidden="true" ></i></td>
       <td class="text-center d-flex align-items-center pading_date"><span class="mr-1 date_time">2020-02-03</span><span class="date_time">10:02:21 IST</span></td>
    
      </tr>
      <tr>
        <th scope="row" class="d-flex align-items-center"><div class="user_name mr-1">JS</div><div class="user_name_content">Jone Smith</div></th>
        <td class="text-center"><i class="fa fa-check check_color" aria-hidden="true" ></i></td>
        <td class="text-center"><i class="fa fa-check check_color" aria-hidden="true" ></i></td>
        <td class="text-center"><i class="fa fa-check check_color" aria-hidden="true" ></i></td>
        <td class="text-center"><i class="fa fa-check check_color" aria-hidden="true" ></i></td>
        <td class="text-center"><i class="fa fa-check check_color" aria-hidden="true" ></i></td>
       <td class="text-center d-flex align-items-center pading_date"><span class="mr-1 date_time">2020-02-03</span><span class="date_time">10:02:21 IST</span></td>

      </tr>
    </tbody>
  </table>

</div>
                                </div>

                            </div>
                            {/* <!-- Card --> */}
                    </div>
                </div>
            </div>
        </div>
   
    </section>

    )
}

export default Dashboard_page
