# 体育赛事 DDL

> Just-DDL Network 独立专题仓库。默认中文展示，英文版本后续由 Hub 手动切换。

体育赛事、报名节点和赛历倒计时，覆盖乒乓球、羽毛球、篮球、台球、匹克球、马拉松与田径。

## 专题数据

- Hub: https://just-agent.github.io/just-ddl/#/topic/sports-ddl
- Pages: https://just-agent.github.io/sports-ddl/
- Repository: https://github.com/Just-Agent/sports-ddl
- 当前条目: 44
- 来源族: 18

## 子专题

- 羽毛球: 14 条
- 乒乓球: 12 条
- 匹克球: 5 条
- 台球: 4 条
- 篮球: 4 条
- 路跑与田径: 5 条

## 数据链路

- `data/items.json`: 已发布 DDL 条目，每条含倒计时 deadline、来源 URL、子专题字段。
- `data/sources.json`: 官方/主办方/权威聚合来源清单。
- `scripts/crawl-sources.mjs`: source-specific crawler，会按来源类型执行不同 adapter 并写入 crawl report。
- `scripts/validate-data.mjs`: 校验必填字段、重复 id、deadline 与 URL 格式。
- `scripts/link-check.mjs`: 链接检查，默认 warning-only；设置 `STRICT_LINK_CHECK=1` 后切换严格模式。
- `.github/workflows/update-data.yml`: Node 24 定时 crawler + validator + link-check，成功后主动通知 Hub 同步。
- `.github/workflows/deploy-pages.yml`: GitHub Pages 静态发布。

## 来源

- APA Poolplayers: https://poolplayers.com/world-pool-championships/
- APA Poolplayers: https://poolplayers.com/us-amateur-championship/
- BMW Berlin Marathon: https://www.bmw-berlin-marathon.com/
- BWF Tournament Calendar: https://bwfbadminton.com/calendar/
- Chicago Marathon: https://www.chicagomarathon.com/
- FIBA Basketball: https://www.fiba.basketball/en/events/fiba-u17-basketball-world-cup-2026
- FIBA Basketball: https://www.fiba.basketball/en/events/fiba-womens-basketball-world-cup-2026
- FIBA Event Calendar: https://www.fiba.basketball/en/events
- ITTF 2026 Events Calendar: https://www.ittf.com/2026-events-calendar/
- Major League Pickleball: https://majorleaguepickleball.co/news/major-league-pickleball-announces-full-2026-may-august-season-schedule-event-tickets-now-on-sale-via-tixr-and-ticketmaster-2/
- Matchroom Pool: https://matchroompool.com/uk-open-pool-championship/
- NBA Playoffs: https://www.nba.com/playoffs/2026/nba-finals
- PPA Tour: https://ppatour.com/schedule/
- Sydney Marathon: https://sydneymarathon.com/
- TCS New York City Marathon: https://www.tcsnewyorkcitymarathon.org/
- Waterfront Hall / World Snooker Tour: https://www.waterfront.co.uk/what-s-on/betvictor-northern-ireland-open/
- World Athletics: https://worldathletics.org/competitions/world-athletics-u20-championships
- WTT Events: https://worldtabletennis.com/eventslist

## 贡献

新增条目请优先提交官方/主办方链接；暂时没有详情页时，可以先登记权威聚合来源，并在 description 中说明“精确赛程发布后拆分”。

微信小程序版本即将上线，敬请期待。
