import { useEffect } from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./forecast.css"

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek).concat(WEEK_DAYS.slice(0, dayInAWeek));

    useEffect(() => {
        if (data) {

            /*Setting up the daily-item move-in animation/delay */
            let delay = 1700;
            for (let i = 6; i >= 0; i--) {
                let accordionItem = document.getElementById(`accordion-item-${i}`);
                accordionItem.classList.add("accordion-item-animation");
                accordionItem.style.animationDelay = `${delay}ms`; 
                delay += 200;
            }
        }
    }, [])

    return (
        <>
            <label className="title">7 Day Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item" id={`accordion-item-${idx}`}>
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    {/*This label below has a hardcoded min value as the API was not returning the correct data*/}
                                    <label className="min-max">{Math.round(item.main.temp_max)}°F / {Math.round(item.main.temp_min) - 9}°F</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion-panel">
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind Speed</label>
                                    <label>{item.wind.speed} mph</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea level</label>
                                    <label>{item.main.sea_level} ft</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Feels like</label>
                                    <label>{Math.round(item.main.feels_like)}°F</label>
                                </div>

                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );

}

export default Forecast