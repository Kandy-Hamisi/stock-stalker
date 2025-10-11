import TradingViewWidget from "@/components/TradingViewWidget";
import WatchlistButton from "@/components/WatchlistButton";
import {
  SYMBOL_INFO_WIDGET_CONFIG,
  CANDLE_CHART_WIDGET_CONFIG,
  BASELINE_WIDGET_CONFIG,
  TECHNICAL_ANALYSIS_WIDGET_CONFIG,
  COMPANY_PROFILE_WIDGET_CONFIG,
  COMPANY_FINANCIALS_WIDGET_CONFIG,
} from "@/lib/constants";

const StockDetails = async ({ params }: StockDetailsPageProps) => {
  const { symbol } = await params;
  const scriptBase = `https://s3.tradingview.com/external-embedding/embed-widget-`;

  return (
    <div className="flex min-h-screen w-full p-4 md:p-6 lg:p-8">
      <div className="grid w-full grid-cols-1 gap-8 xl:grid-cols-2">
        {/* Left column */}
        <section className="flex flex-col gap-8">
          <TradingViewWidget
            scriptUrl={`${scriptBase}symbol-info.js`}
            config={SYMBOL_INFO_WIDGET_CONFIG(symbol)}
          />

          <TradingViewWidget
            title="Candlestick Chart"
            scriptUrl={`${scriptBase}advanced-chart.js`}
            config={CANDLE_CHART_WIDGET_CONFIG(symbol)}
            className="custom-chart"
          />

          <TradingViewWidget
            title="Baseline Chart"
            scriptUrl={`${scriptBase}advanced-chart.js`}
            config={BASELINE_WIDGET_CONFIG(symbol)}
            className="custom-chart"
          />
        </section>

        {/* Right column */}
        <section className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <WatchlistButton
              symbol={symbol.toUpperCase()}
              company={symbol.toUpperCase()}
              isInWatchlist={false}
            />
          </div>

          <TradingViewWidget
            title="Technical Analysis"
            scriptUrl={`${scriptBase}technical-analysis.js`}
            config={TECHNICAL_ANALYSIS_WIDGET_CONFIG(symbol)}
          />

          {/*<TradingViewWidget*/}
          {/*  title="Company Profile"*/}
          {/*  scriptUrl={`${scriptBase}company-profile.js`}*/}
          {/*  config={COMPANY_PROFILE_WIDGET_CONFIG(symbol)}*/}
          {/*/>*/}

          <TradingViewWidget
            title="Company Financials"
            scriptUrl={`${scriptBase}financials.js`}
            config={COMPANY_FINANCIALS_WIDGET_CONFIG(symbol)}
          />
        </section>
      </div>
    </div>
  );
};

export default StockDetails;
