<section>
    <!-- Left Sidebar -->
    <aside id="leftsidebar" class="sidebar">
        <!-- User Info -->
        <div class="user-info">
            <div class="image">
                <img src="/theme/images/user.png" width="48" height="48" alt="User" />
            </div>
            <div class="info-container">
                <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{\Illuminate\Support\Facades\Auth::user()->name}}
                </div>
                <div class="email">{{\Illuminate\Support\Facades\Auth::user()->email}}</div>
                <div class="btn-group user-helper-dropdown">
                    <i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                    <ul class="dropdown-menu pull-right">
                        <li><a href="javascript:void(0);"><i class="material-icons">person</i>Profile</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="javascript:void(0);"><i class="material-icons">group</i>Followers</a></li>
                        <li><a href="javascript:void(0);"><i class="material-icons">shopping_cart</i>Sales</a></li>
                        <li><a href="javascript:void(0);"><i class="material-icons">favorite</i>Likes</a></li>
                        <li role="separator" class="divider"></li>
                        <li>
                            <a class="dropdown-item" href="{{ route('logout') }}"
                               onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- #User Info -->
        <!-- Menu -->
        <div class="menu">
            <ul class="list">
                <li class="header">????????</li>
                <li class="active">
                    <a href="/superadmin">
                        <i class="material-icons">dashboard</i>
                        <span>???????????? ????????????????????</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);" class="menu-toggle">
                        <i class="material-icons">people</i>
                        <span>????????????????????????</span>
                    </a>
                    <ul class="ml-menu">
                        <li>
                            <a href="/superadmin/users">????????????????????????</a>
                        </li>
                        <li>
                            <a href="/superadmin/roles">????????</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);" class="menu-toggle">
                        <i class="material-icons">radio_button_checked</i>
                        <span>??????????????</span>
                    </a>
                    <ul class="ml-menu">
                        <li>
                            <a href="/superadmin/filters">??????????????</a>
                        </li>
                        <li>
                            <a href="/superadmin/filtervalues">???????????????? ????????????????</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);" class="menu-toggle">
                        <i class="material-icons">label_outline</i>
                        <span>??????????????????</span>
                    </a>
                    <ul class="ml-menu">
                        <li>
                            <a href="/superadmin/categories">?????????????????? ????????????</a>
                        </li>
                        <li>
                            <a href="/superadmin/types">???????? ????????????</a>
                        </li>
                        <li>
                            <a href="/superadmin/orderstatuses">?????????????? ??????????????</a>
                        </li>
                        <li>
                            <a href="/superadmin/packing">??????????????</a>
                        </li>
                        <li>
                            <a href="/superadmin/typedelivery">???????? ????????????????</a>
                        </li>
                        <li>
                            <a href="/superadmin/partners">????????????????</a>
                        </li>
                        <li>
                            <a href="/superadmin/pagecategories">?????????????????? ??????????????</a>
                        </li>
                        <li>
                            <a href="/superadmin/orderdocuments">?????????????????? ?????? ??????????????</a>
                        </li>
                        <li>
                            <a href="/superadmin/countries">????????????</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="javascript:void(0);" class="menu-toggle">
                        <i class="material-icons">home</i>
                        <span>??????????????????????</span>
                    </a>
                    <ul class="ml-menu">
                        <li>
                            <a href="/superadmin/organizations">??????????????????????</a>
                        </li>
                        <li>
                            <a href="/superadmin/organizationstatuses">?????????????? ??????????????????????</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="javascript:void(0);" class="menu-toggle">
                        <i class="material-icons">shopping_basket</i>
                        <span>????????????</span>
                    </a>
                    <ul class="ml-menu">
                        <li>
                            <a href="/superadmin/products">????????????</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="javascript:void(0);" class="menu-toggle">
                        <i class="material-icons">gavel</i>
                        <span>??????????????????????</span>
                    </a>
                    <ul class="ml-menu">
                        <li>
                            <a href="/superadmin/offers">??????????????????????</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);" class="menu-toggle">
                        <i class="material-icons">monetization_on</i>
                        <span>????????????</span>
                    </a>
                    <ul class="ml-menu">
                        <li>
                            <a href="/superadmin/orders">????????????</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);" class="menu-toggle">
                        <i class="material-icons">settings</i>
                        <span>????????????????????????</span>
                    </a>
                    <ul class="ml-menu">
                        <li>
                            <a href="/superadmin/accreditations">????????????????????????</a>
                        </li>
                        <li>
                            <a href="/superadmin/quiz">??????????????????</a>
                        </li>
                        <li>
                            <a href="/superadmin/quizquestions">??????????????</a>
                        </li>
                        <li>
                            <a href="/superadmin/quizquestionsvalues">???????????????? ??????????????</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);" class="menu-toggle">
                        <i class="material-icons">settings</i>
                        <span>??????????????????</span>
                    </a>
                    <ul class="ml-menu">
                        <li>
                            <a href="/superadmin/settings">??????????????????</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);" class="menu-toggle">
                        <i class="material-icons">description</i>
                        <span>???????????????? ??????????</span>
                    </a>
                    <ul class="ml-menu">
                        <li>
                            <a href="/superadmin/simplepages">???????????????? ??????????</a>
                        </li>
                    </ul>
                </li>

                <li class="header">????????????????????</li>
                <li>
                    <a href="javascript:void(0);">
                        <i class="material-icons col-red">donut_large</i>
                        <span>????????????</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <i class="material-icons col-amber">donut_large</i>
                        <span>????????????????????????????</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <i class="material-icons col-light-blue">donut_large</i>
                        <span>????????</span>
                    </a>
                </li>
            </ul>
        </div>
        <!-- #Menu -->
        <!-- Footer -->
        <div class="legal">
            <div class="copyright">
                &copy; 2018 - 2021 <a href="javascript:void(0);">Disfood.ru</a>.
            </div>
            <div class="version">
                <b>Version: </b> Beta 1.0.5
            </div>
        </div>
        <!-- #Footer -->
    </aside>
    <!-- #END# Left Sidebar -->

</section>
