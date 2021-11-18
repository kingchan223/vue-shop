<template>
  <div class="product-list">
    <main class="mt-3">
      <div class="container">
        <div class="row mb-3">
          <div class="col-12">
            <select class="form-select">
              <option selected></option>
              <option value="1">키보드</option>
              <option value="2">마우스</option>
              <option value="3">모니터</option>
            </select>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card" style="width: 18rem">
              <a href="product_detail.html"
                ><img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBUVFRUYGBQYGBgeGhkcHRoaGhocGhgcGR8aGhocIC4lJR44IxweJjgmKy8xNTU1GiU7QDs0Py40NTEBDAwMEA8QHhIRGjQrISQxNDU0MTQxND8/MTQ0MTE0MT8xND80NDg0NjE0MTQ0PzpANDExNDQxMTQ/NDE0NDExNP/AABEIAOYA2wMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECBQYHAwj/xABLEAACAQMCAgYFBwgHBgcAAAABAgADBBESIQUxBhQiQVHRE1NhcZIjMlKBkZOhBxUWQlSx0vAzNERyc6LBJWOCsrPCJENiZIOjw//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQFA//EACERAQEAAgIBBAMAAAAAAAAAAAABAhEDBCExMkFxE1Fh/9oADAMBAAIRAxEAPwDs0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEpKykBmMy2XCAzGYxKYgXRLRLoCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAlJWUgUErKCNUC6JQxAGVlpl0BERAREQEREBERAREQEREBERAREQEREBERASkrEC3ES2pUVRlmCjxJAH4zy67T9YnxL5wJGYkfrtL1lP4l85Rb+kRkVUI8Qy+cCTiVkT84Uc49KmeeNS5x7sy7rtL1lP4l84EmJG67S9YnxL5x12l6xPiXzgSYkbrtL1ifEvnHXqXrE+JfOBJiRuvUvWJ8S+cdepesT4l84EmJG69S9YnxL5x16l6xPiXzgSYkbr1L1ifEvnHXqXrE+JfOBJiRuvUvWJ8S+cdepesT4l84EmJG69S9YnxL5x16l6xPiXzgSYkbr1L1ifEvnHXqXrE+JfOBJiRuvUvWJ8S+cdepesT4l84EmJG69S9YnxL5x16l6xPiXzgSZSR0vKbEBXQk8gGBJ+rMkQOd/ldoq1G1VgCprqCD4EgH980leCWhA+RGrv+j38u/wm8/lcJFvQZRlhWUqPE7YH2znIvLz9W2J9wz/AKzi7XHzZWfir0ujy9bDHKc0878eGohE9IwYYUMw2UEgAkDAJGe7vmU6P2dOpc00dAyEvkEYzhGIzj2gd8t4fYXDsatGg7EOdwFYBs5I0scHn3gyTbULq2uKbG3YVWLFEYABuy2rGDgbZPdynZPR5+dlt03W76KWQoVGFuupUc5ywwQCRjtTHdGujlpUoUXqUVZmRSTlsliM77y2543xJqVRDZkIUYE4zpUjc/O8JC4Fxe+SjTFG11oEAV8fOXkMjUP53mmHtccAtl4i9EUV9GLdXC5bGosozzzyMk9J+jdnTs61SnRCuqghsnY6h7cTE1OJ3pvGdrb5c0QCmMdgMuGHa8cd/fPXjvGL+pb1FrWpWkQAz4PZAPjqMDOWPRixZRqoDOBjdvDv3nP+kNolO6r00UKqthRzwNKnv9pm22vGuIqoC2eRgeO+OW2qazeW9zcXFdzQb0usa1AA0EjYbnwEistwrhNu1OmXpg5RSSNySRnxEjVeGURdlPRrp9AG0741awM8/CXU7q8t0QG3ZQcIpIPaJ2C7NzMoad61Y1uqsWKaMAbYBB+lzyJR7cZ4VbpQqMlMBlXIJ5g5HtnvbcHtiO1SGcdnGfD9bJ90gV7y7uabIKBZD2CRzGg5KjLdxl/5wvKZVDblWf5qkHt6Bk/rY25wPO04bQNeurUwVVkAG+wK5ON/3yvSDhtBKQZKYU61Ge/dTnvxzEpTW8RqlXqzZchmONhpB5Yblj90pd1ru5RfkGZGIYMObYyoOS3KB4dFrClVqOKiKwWnkDcb+kRc7ewn7ZsPHuAWqWtZ0pAOqZBycg6h7cTX+Fm5t6rqtuTUanujDfRrU6hg+IA+uZHi/FL17d1qW2imVwz4J0rkH6W0gy9r0dtCozRXOlcbt4DnvMdZ8EtzcXSGkpRHphRluyGQscb+Mut+L36qAtrtpA79xjw1THUOLXKV67ihmozIai4I0FVIUDfw3gZPpBwG2RKbJSC5r0lO5yVY4IO8yNLo7ZnnQXOfbj9817iPF7usqq1vgK6PsNyUOQD2uUlJ0ivRkC2GCeW/8UDEcM4dSNS4VkBCVCqg52AZhjn7Bv7JK41wugqBkTA1oMnY4JwQcGY+xu6weqyU9bO+p9uTEscc/advZPW/vbhlUPS0qXTG3Ngchc58YGXHCLfB+SGrV7cY3z35znH4zH8L4dQJfWgIFZl78hQ2MDfHKVHELnP9X/n4pEs7uuAxWlq1OxY4/WJ7QxnxlGWtbGml5YFFC5u6A+r0qz6RnzVwm4qvfWAqU9A63bkbc/lkB3z7fxn0pIND/Kx/V7c/+4p/8wmuWNUDmwA982T8rKg2lIHka9MH3E4M0Sj0etWPbpnHsLZ/fNRmp3QN1FBu0M+lq53G2WPP6v3yR0nqqb2w7SnapncbEo43/nvmt9Iej9tTt6rpTwyjstqbPPbbMz3CeiFiyIWoAkqv6z7nAzntQf1nruuOr1wXX+jfbI3OgqJhuhtUC1t+0B2F7xzB8x+EwVh0btWvL2maQNOm9IKNTdnUGLYOfYOckdK+i9nSpUmp0tJavSQnU26scMPnSKl3rj86thlI6qBkEc9aGTOl9YGwuBqBJUbZGSSykzzteh1i2M0Bz+k/8U17ov0ftqq1ddLVpuKiA5bIVSuBz9pgbhwqsAqdofNHeO8CYHhdQde4gQRjXRwcjuRxIfG+jdrTuLNFpALUNTUNTb6ULDv8cTJP0SsvRu3oRkI5zqfmFJGN4F3S+oPRW3aGetUe8cgT+EzFlVA2LDG3ePHM1Lo50dtalCi70gzMuWOptzk+2eVx0etlv/QikPR9X16dTfO1hc5znlnb2wJ/RSoNFXcb3FbvHIsPOenSGoDd2PaB3r53zzTvkTj/AEZtUtK1RKWHRAQdTbHIHImSLTotZsBmiOQ/Wfw/vQMzVqr6J8sNkfvH0TMT0VfFtQ3A7A7x3MZibLgFsbm7pmmCtN6YQZbshkLEc/Hxnp0i6O2tNKTJTwWuKSHtNurk6hz9nOBMuGB4kSCMdUA5jn6UHEk9JXHUrjtDOnbcfSE86HRWzPOiPifzmJ4DwG2dKhenqK1qqg5bOlSAo5wNmsHGlO0Pmr3jvUTW3cdbvDkY1098juTEpxbo/bJcWiLTwlT02sam30IGXv8AEzIVei1p6N2FLtBGPzm2IXIxvA8lq45Nj6/58ZUOPEfbMBwzhFB6NNmTLMuSctucn2yf+YLbup/i3ifb4YlVB4AcPcHI/pAQfrfeTeP1NSIS2W9LT7xk4PlMTwbh1Ko1YOuQjhRudl39vsknjPCLdAhpqQGqopySCVbmCMmQZ5LpsadfZ3GMjlyxMZwOvp1nP/m1cYbHNs5z4S9OBWun5h1+G+Ofjqzy9khcF4Nb1A+tSdLuM6sHAbA+cQOUDLWz67/hxLam61TJ3ydnTyE+gp88cJ4clLiXDwi4BuFz2tXzWQjcHHeeU+iJBon5Ws9SQj5wr0sZ5ZycZ+uc/Tr5PZp0G+up/pOh/lYIFkpPIXFIn3AnM0NOO265+XRc/wDqImolReIWvEKtJqbU6Co+ASC49vM7d34STwTi1+2pKdO21UmCNqZxkhQcjBnunSO277hce1jIHRnjluj3Jesq662pcnGV0gZH1gxQuzf2tc1XS3LXdVEwGfCuMgeBA7Rzzk3ilrxO5RFKWwVHVxhnyWTcA5lnSzj1rUNloro2i4V3wc6VBXczMUOk9mFObinyP63skGJ4PxXiFVQ1KlbYLMMMz5yrFTy9oMxtmL21qi30W5asXqgln0jlqBIx4bbSR0S45b06IVq6oQ9Q4JwcF2IP2ESvGOOWzX1u610KLScMwOwJJIBMCnF6XEG0XDpbYt1dwFZ9wQQ3P2Znva3fEK1IFKdtpqU8jLPkK6d/dnBkjinSK1a2rotwhZqbgAHJJIIAEjdH+PWyUKKvXRWFNFYE7ghQCD9kCDwure0W6qqW5aiinLM+CrEldx3/AFDlKcX67Rc3tVKHZRaZVWfkzgg4ODnOO/kZ6DjVv164f0yaGp0wrZ2JXmAfrl/S3jdvUs3RKys5anhQcnZwT+Agel9R4hXpPRKWwVxpJDPnnnbPunjw7iF8xdEp2+qm+hstU3ZQM4weW4mVt+kVqCc3CYz9KYXg3GbdalyzVlAe4dlJOMqQMEfZAsqddt67O6UC11URdmfSGVSAPEDHv5STxC2v66opW2ASorjDPksmcA57t5b0g41bs1pprK2muGbB+aunGT9sytDpFagb3CfbAxnC+J31VFqU6dvpbVjUzg9lipyB7QZDszeW7+g00C1QvWyWbG5AYbe3kMT06K8Xt6dvTR6yqw1ZBOCMux/cZ6cQ41bteUWWspRaLqWzsCWyBnx2kFnFad7lLh0oabdajYUvuGXDc+ew25S1eL3r0+yluA67bvkBl9/PeTuLcdtmtq6LWQs1NwoBySSpAH4zDWXE6K06YNRchEB37woEqrLShdoqqq0iFGB2n5DJkgPefQofE89V4zQ5emXHhmXLxi39an2yjW7XiD0mfCqSzZbOeYJ5YPLeel3xZ6gUMqAK6tsDzXl38pCqkFmI5FiR9ssZgOcyMsOP1PoJ9jfxSPbcTdAQFQ5ZmOQebHJ7+UgCqp5MJfCtl6LXz1eI2OoKAtdcYB7/AByfZPo6fNXQQf7Ssv8AGX8FYz6VhGk/lXTNiB/v6X4sRNLNqhJyifCvlN1/Kxn83nHP0tPHvycTn6cIuWyVumAydylIcvYZqJWR6rR049Cmr6Wx7/DEicTs6YoVT6NMhG/VXw90w/EaN1Sr0qRuidYbJ0JtpUt4YPLEnngd26kG7Ohh9CkMg/XmUZfopaU2tqBamjE0l5qvMqNztINS1pjiddQiaRb09tK4BJBOBiYfhovEqvbU7ohaSoF7FPkwO2WHdjxk8cEvDUat1s+kZQpbTROVHIYBx3eGZkZDpraUlsKrLTRWGjBCrkHUN84mTs7KkedJD/wr+7E1Wwsbq+tj6S8bQzspT0ab6GwDkAHuziZVOE3i8r5vuqflAi8Gtk6xeDQmBcEAaRsAo2G3Lzl/Su2pq1iVpoM3SA4Vdx4HbcSyh0duEZ2W9YM7anPo0OW8d/8ASLvo/cVdGu9ZtDB07CDDDkdsfjAzltY0iu9JCd99K+Hu/nM1/ojbo1BCyK3aqfqj1jDnj3fZJQ4TeDlfH7un5SLadHrikoRLwqoJONCHcnJ557zAu4raot9bKEQA0ahI0rgnPPGOcm8YtKXVLgikgYUXOdIzkIcEbbSBW4FcO61GvGLqpVToXYHmMAYl1bg906sjXrFGBDD0aDIOxGQMwJHAbamaFAlFOaVP9Vefo135eMiJbIL64XQmkJQwNK4GVJONv5xLfzTc0qfYvCFROyPRpyVdhkjwExXDba5q/wDiBcEPUVdRK0xy5DDYGw7wIGZ6W2tNbR2VFDBqe+lc/PUHu8JlqVnSLHNNOZ/VXx9385modIKF0tA+kuCya0GnTT3JOxyu+2xk6jb3pyVujgE76KQ3+uBEtKCekuRoXAuagHZGwGnAHsksWqfQX4R5TDV7avTrKnpzmq1RmOlT2lGonvG/sk1bC4I1dZOM4+Ymc4zy549sKyNS3pHGmkq8/Bs77d0olomfmJ8I8phaKXDVXp9YPY0b6E31gnvG3KT/AM13IGTcYH92me/HISjVnGGb3n98k8FQNdW4YAqai5BGQeZ3Bkng/BDch2NUppfTjSDnbOck+2Tbro+1u9BkrnU1ZUDaRlTgnUByPI7HxmRtdtaUyBmmh/4Vx9mJzesuHceDMPsYibxS4bdYGLxh/wDHT8prvCuj7V0FQ1irOzZGkcw7Dmfdn64Hv0AH+07L/F/7GM+k5wDotwnq/FbBdevUznOMY002nf4GqflFs6lWyK0qbVHFSm2lRliAd8CaKlC4H9iu/uj5zs0S7TThXELC5evRqLY3WlFcEGkc9pSMjf2/hJlOncAf1G8znn6I/uzO0xGzTgicNuhXrVOo3Wmpox8k2RpDcxn2/hMgKVwNOLC8BA3PoicnPPntO1RG1cS6O0bm3oCm1leag7nIokjDMWHfz3mTN1X/AGC9+5PnOtxIORG4r/sF79yfOWmvcfsN79y3nOvxGxx81rj9hvfuW85aatx+w3v3Lec7FEDjvpLj9gvPuW85T0lx+wXv3Lec7HEDi9ybhkdRY3mSrAfItzIx4zC8N4VdIlNXsbs6AAQKTb79x90+gogfPfFuEXdSmUSxuhllIzSbYBs85LFjc5JNjdnOcfJMMZ753mIHz1dcIu3q0XFjdaUFTPyTZ7a4GBJS2F0P7Dd/ctO9xA+eafCLsVar9RusPox8k2eypBz9smJY3Q/sN39y071ED5/4Bwy7oLUDWN3lqmoaaLHbGO/El8TtrmoaGmxvOxWWo2aLDYKRgb89/wAJ3WIHFqRuF/sF79VE+cx3B7K6pUwjWN3kM52osRhnLDfbxneogcb4Fw+5fiVlUNpcU6dI1C71EKqNVNgNyfHA+udjlZSAlZSVgIiICIiAiIgYi96Q2tJylSsquuMrhjjIyM4HgZ5jpPZkE9YTAGd9Q+zI3PsG8530qqst9cFTg6lHcdtCePumAvslqRPPWx/+p/OVHYf0usv2hfhf+GXL0osyCesJsO/I+zI3PsE5DScqGAxhtjt7CP8AWR7sdqh/iH/pVIHZf0ssvXr9jeUuTpPZkEiumAMnmO/GwI35905JQrsgcALhxg5GSOfLwO5kS4Hapf3z/wBN40Ox/pdZftC/C/8ADKr0qsyCesJt4hgT7gRkn2CciVyoYDk3Pb39/wBcjXC9ql/if/m4/wBY0OyfpdZevHwv/DL6XSa0bOmuu3jlT9QIGfqnJUuGRXQAYcAHIyRjw8JZbDt0/wC//wBjCfPkyuONynw+3Bxzk5JhfmuwfpFa+uX8fKZOnUDAMpyCAQe4g985E3hOocCObegf92n/ACic3W7OXLbLPR193p49fHG423f7ZKIidjzyIiAiIgJSVlICVlJWAiIgIiICIiBh7zo5a1XZ3pBnbmdTjO2OQYDunkOitmM/IDcY3Zzj3ZbY7cxM7EDA/ohZep/zVP4pYeiFl6kHwyzkj2gltjjbI7iR3zYYga/+h1l6o/HU/igdEbL1IPvZyR7QS2x9o8T4zYIgYD9D7L1P+ep/FH6JWeP6AfWXJHtBLbH2juJHfM/EDAfojZep/wA9T+KVXoraDlRHv1OSPcSdj7pnYks3NVZbLuXywv6MWvqv8z+cytCkqKFUYUAADwA2AnrKTMwxx9s01lyZ5+7K37q6IibYIiICIiAiIgUlZSVgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAlMSsQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//9k="
                  height="300"
                  class="card-img-top"
                  alt="..."
              /></a>
              <div class="card-body">
                <h5 class="card-title">
                  Keychron 키크론 K1 ver.4 블루투스 기계식 키보드(영문키)
                </h5>
                <p class="card-text">
                  <span class="badge bg-secondary">전자제품</span>
                  <span class="badge bg-secondary">컴퓨터</span>
                  <span class="badge bg-secondary">주변장치</span>
                  <span class="badge bg-secondary">키보드</span>
                </p>
                <div class="d-flex justify-content-between align-item-center">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      장바구니
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      주문하기
                    </button>
                  </div>
                  <small class="text dark">219,000원</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card" style="width: 18rem">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukzQu8ZrghXlIu4V18GEY-6Mrae8D254HsQ&usqp=CAU"
                height="300"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  레오폴드 FC750R PD 화이트 한글 저소음 적축
                </h5>
                <p class="card-text">
                  <span class="badge bg-secondary">전자제품</span>
                  <span class="badge bg-secondary">컴퓨터</span>
                  <span class="badge bg-secondary">주변장치</span>
                  <span class="badge bg-secondary">키보드</span>
                </p>
                <div class="d-flex justify-content-between align-item-center">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      장바구니
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      주문하기
                    </button>
                  </div>
                  <small class="text dark">210,000원</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card" style="width: 18rem">
              <img
                src="http://img2.tmon.kr/cdn3/deals/2021/03/22/5592850014/front_7e15b_ldry0.jpg"
                height="300"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  로지텍코리아 ERGO K860 무선블루투스 인체공학키보드
                </h5>
                <p class="card-text">
                  <span class="badge bg-secondary">전자제품</span>
                  <span class="badge bg-secondary">컴퓨터</span>
                  <span class="badge bg-secondary">주변장치</span>
                  <span class="badge bg-secondary">키보드</span>
                </p>
                <div class="d-flex justify-content-between align-item-center">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      장바구니
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      주문하기
                    </button>
                  </div>
                  <small class="text dark">120,000원</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card" style="width: 18rem">
              <img
                src="http://img4.tmon.kr/cdn3/deals/2021/08/04/7445143506/7445143506_front_9e1ec67941.jpg"
                height="300"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  블루투스5.0_자이온 휴대용 블루투스 미니키보드
                </h5>
                <p class="card-text">
                  <span class="badge bg-secondary">전자제품</span>
                  <span class="badge bg-secondary">컴퓨터</span>
                  <span class="badge bg-secondary">주변장치</span>
                  <span class="badge bg-secondary">키보드</span>
                </p>
                <div class="d-flex justify-content-between align-item-center">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      장바구니
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      주문하기
                    </button>
                  </div>
                  <small class="text dark">39,000원</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card" style="width: 18rem">
              <img
                src="data:image/jpeg;base64,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"
                height="300"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  Keychron 키크론 K1 ver.4 블루투스 기계식 키보드(영문키)
                </h5>
                <p class="card-text">
                  <span class="badge bg-secondary">전자제품</span>
                  <span class="badge bg-secondary">컴퓨터</span>
                  <span class="badge bg-secondary">주변장치</span>
                  <span class="badge bg-secondary">키보드</span>
                </p>
                <div class="d-flex justify-content-between align-item-center">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      장바구니
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      주문하기
                    </button>
                  </div>
                  <small class="text dark">219,000원</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card" style="width: 18rem">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukzQu8ZrghXlIu4V18GEY-6Mrae8D254HsQ&usqp=CAU"
                height="300"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  레오폴드 FC750R PD 화이트 한글 저소음 적축
                </h5>
                <p class="card-text">
                  <span class="badge bg-secondary">전자제품</span>
                  <span class="badge bg-secondary">컴퓨터</span>
                  <span class="badge bg-secondary">주변장치</span>
                  <span class="badge bg-secondary">키보드</span>
                </p>
                <div class="d-flex justify-content-between align-item-center">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      장바구니
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      주문하기
                    </button>
                  </div>
                  <small class="text dark">210,000원</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card" style="width: 18rem">
              <img
                src="http://img2.tmon.kr/cdn3/deals/2021/03/22/5592850014/front_7e15b_ldry0.jpg"
                height="300"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  로지텍코리아 ERGO K860 무선블루투스 인체공학키보드
                </h5>
                <p class="card-text">
                  <span class="badge bg-secondary">전자제품</span>
                  <span class="badge bg-secondary">컴퓨터</span>
                  <span class="badge bg-secondary">주변장치</span>
                  <span class="badge bg-secondary">키보드</span>
                </p>
                <div class="d-flex justify-content-between align-item-center">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      장바구니
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      주문하기
                    </button>
                  </div>
                  <small class="text dark">120,000원</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card" style="width: 18rem">
              <img
                src="http://img4.tmon.kr/cdn3/deals/2021/08/04/7445143506/7445143506_front_9e1ec67941.jpg"
                height="300"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  블루투스5.0_자이온 휴대용 블루투스 미니키보드
                </h5>
                <p class="card-text">
                  <span class="badge bg-secondary">전자제품</span>
                  <span class="badge bg-secondary">컴퓨터</span>
                  <span class="badge bg-secondary">주변장치</span>
                  <span class="badge bg-secondary">키보드</span>
                </p>
                <div class="d-flex justify-content-between align-item-center">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      장바구니
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      주문하기
                    </button>
                  </div>
                  <small class="text dark">39,000원</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card" style="width: 18rem">
              <img
                src="data:image/jpeg;base64,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"
                height="300"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  Keychron 키크론 K1 ver.4 블루투스 기계식 키보드(영문키)
                </h5>
                <p class="card-text">
                  <span class="badge bg-secondary">전자제품</span>
                  <span class="badge bg-secondary">컴퓨터</span>
                  <span class="badge bg-secondary">주변장치</span>
                  <span class="badge bg-secondary">키보드</span>
                </p>
                <div class="d-flex justify-content-between align-item-center">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      장바구니
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      주문하기
                    </button>
                  </div>
                  <small class="text dark">219,000원</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card" style="width: 18rem">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukzQu8ZrghXlIu4V18GEY-6Mrae8D254HsQ&usqp=CAU"
                height="300"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  레오폴드 FC750R PD 화이트 한글 저소음 적축
                </h5>
                <p class="card-text">
                  <span class="badge bg-secondary">전자제품</span>
                  <span class="badge bg-secondary">컴퓨터</span>
                  <span class="badge bg-secondary">주변장치</span>
                  <span class="badge bg-secondary">키보드</span>
                </p>
                <div class="d-flex justify-content-between align-item-center">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      장바구니
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      주문하기
                    </button>
                  </div>
                  <small class="text dark">210,000원</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card" style="width: 18rem">
              <img
                src="http://img2.tmon.kr/cdn3/deals/2021/03/22/5592850014/front_7e15b_ldry0.jpg"
                height="300"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  로지텍코리아 ERGO K860 무선블루투스 인체공학키보드
                </h5>
                <p class="card-text">
                  <span class="badge bg-secondary">전자제품</span>
                  <span class="badge bg-secondary">컴퓨터</span>
                  <span class="badge bg-secondary">주변장치</span>
                  <span class="badge bg-secondary">키보드</span>
                </p>
                <div class="d-flex justify-content-between align-item-center">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      장바구니
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      주문하기
                    </button>
                  </div>
                  <small class="text dark">120,000원</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card" style="width: 18rem">
              <img
                src="http://img4.tmon.kr/cdn3/deals/2021/08/04/7445143506/7445143506_front_9e1ec67941.jpg"
                height="300"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  블루투스5.0_자이온 휴대용 블루투스 미니키보드
                </h5>
                <p class="card-text">
                  <span class="badge bg-secondary">전자제품</span>
                  <span class="badge bg-secondary">컴퓨터</span>
                  <span class="badge bg-secondary">주변장치</span>
                  <span class="badge bg-secondary">키보드</span>
                </p>
                <div class="d-flex justify-content-between align-item-center">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      장바구니
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      주문하기
                    </button>
                  </div>
                  <small class="text dark">39,000원</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="mt-5 py-5 bg-dark">
      <div class="row">
        <div class="col-12 col-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="d-block mb-2"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>Product</title>
            <circle cx="12" cy="12" r="10" />
            <path
              d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"
            />
          </svg>
          <small class="d-block mb-3 text-muted">&copy; 2017–2021</small>
        </div>
        <div class="col-6 col-md">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li><a class="link-secondary" href="#">Cool stuff</a></li>
            <li><a class="link-secondary" href="#">Random feature</a></li>
            <li><a class="link-secondary" href="#">Team feature</a></li>
            <li><a class="link-secondary" href="#">Stuff for developers</a></li>
            <li><a class="link-secondary" href="#">Another one</a></li>
            <li><a class="link-secondary" href="#">Last time</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li><a class="link-secondary" href="#">Resource name</a></li>
            <li><a class="link-secondary" href="#">Resource</a></li>
            <li><a class="link-secondary" href="#">Another resource</a></li>
            <li><a class="link-secondary" href="#">Final resource</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li><a class="link-secondary" href="#">Business</a></li>
            <li><a class="link-secondary" href="#">Education</a></li>
            <li><a class="link-secondary" href="#">Government</a></li>
            <li><a class="link-secondary" href="#">Gaming</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>About</h5>
          <ul class="list-unstyled text-small">
            <li><a class="link-secondary" href="#">Team</a></li>
            <li><a class="link-secondary" href="#">Locations</a></li>
            <li><a class="link-secondary" href="#">Privacy</a></li>
            <li><a class="link-secondary" href="#">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped>
      .card {
        margin-top: 10px;
      }
</style>
