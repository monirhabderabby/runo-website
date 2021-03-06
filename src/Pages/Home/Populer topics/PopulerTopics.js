import { Tabs } from "flowbite-react";
import Adventure from "./Adventure";
import All from "./All";
import Branding from "./Branding";
import Technology from "./Technology";
import Travel from "./Travel";

const PopulerTopics = () => {
    return (
        <div className="px-4 md:px-8 lg:px-12 mt-12">
            <h1
                className="text-2xl lg:mt-[75px] lg:mb-[25px]lora"
                id="articles"
            >
                Populer Topics
            </h1>
            <section className="">
                <Tabs.Group aria-label="Tabs with underline" style="underline">
                    <Tabs.Item active={true} title="All">
                        <All />
                    </Tabs.Item>
                    <Tabs.Item title="Adventure">
                        <Adventure />
                    </Tabs.Item>
                    <Tabs.Item title="Travel">
                        <Travel />
                    </Tabs.Item>
                    <Tabs.Item title="Technology">
                        <Technology />
                    </Tabs.Item>
                    <Tabs.Item title="Branding">
                        <Branding />
                    </Tabs.Item>
                </Tabs.Group>
            </section>
        </div>
    );
};

export default PopulerTopics;
