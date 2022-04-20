defmodule Benching do
  alias Plausible.Session.Store, as: MapStore
  alias Plausible.Session.EtsStore, as: EtsStore

  @events [
    %Plausible.ClickhouseEvent{
      name: "pageview",
      pathname: "/",
      browser: "Firefox",
      browser_version: "99.0",
      domain: "localhost",
      hostname: "localhost",
      operating_system: "GNU/Linux",
      screen_size: "Desktop",
      user_id: 123,
      timestamp: ~N[2022-04-19 10:00:00]
    },
    %Plausible.ClickhouseEvent{
      name: "pageview",
      pathname: "/sites",
      browser: "Firefox",
      browser_version: "99.0",
      domain: "localhost",
      hostname: "localhost",
      operating_system: "GNU/Linux",
      screen_size: "Desktop",
      user_id: 123,
      timestamp: ~N[2022-04-19 10:15:00]
    },
    %Plausible.ClickhouseEvent{
      name: "pageview",
      pathname: "/sites",
      browser: "Firefox",
      browser_version: "99.0",
      domain: "localhost",
      hostname: "localhost",
      operating_system: "GNU/Linux",
      screen_size: "Desktop",
      timestamp: ~N[2022-04-19 10:00:00]
    }
  ]

  def bench_map_store() do
    for event <- @events do
      MapStore.on_event(event, nil)
    end
  end

  def bench_ets_store() do
    for event <- @events do
      EtsStore.on_event(event, nil)
    end
  end
end

Benchee.run(
  %{
    "Map" => fn -> Benching.bench_map_store() end,
    "ETS" => fn -> Benching.bench_ets_store() end
  },
  time: 10,
  memory_time: 2
)
