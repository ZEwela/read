import Header from '../../components/Header';

export default function Categories() {
    return (
        <>
            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
            <div class="position-sticky">
              <div class="list-group list-group-flush mx-3 mt-4">
                <Header text="Subeddits"/>
                <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                  <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                </a>
              </div>
            </div>
          </nav>
      </>
    )
}