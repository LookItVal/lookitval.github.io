<template>
  <div class="home">
    <Head>
        <Title>Look, It's Val!</Title>
        <Meta name="description" content="Quinn Valencia Cecil's personal website and portfolio." />
    </Head>
    <WunschFlamingoSection>
        <div class="landing">
            <span class="background-lambda">λ</span>
            <div class="left-text">
                <h1>Quinn <span>Valencia</span> Cecil</h1>
                <HomeSubtext />
                <div class="socials-bar">
                    <Socials />
                </div>
            </div>
            <div class="right-image">
                <img src="/photos/DitherPortrait.png" alt="Quinn Valencia Cecil" />
            </div>
        </div>
    </WunschFlamingoSection>
    <WunschFlamingoSection>
        <div class="about">
            <div class="left-image">
                <HomeHexPhoto hex-color="var(--green)" />
            </div>
            <div class="right-text">
                <div class="header"><h2>About</h2><ShimmeringText text="Me" header-tag="h2" color="green" class="header-highlight"/></div>
                <p>Hi! I'm Quinn, a full stack developer with a background in audio engineering. I love creating things, whether it's a new song or a new app. I'm passionate about accessibility and making the web a better place for everyone. I'm currently looking for new opportunities to grow and learn.</p>
                <GradientButton :click="viewResume" color="green" class="resume-button">
                    <h4>View Resume</h4>
                </GradientButton>
                <PDFViewer ref="resumePDF" pdfUrl="https://docs.google.com/document/d/1ZvWFu-CFvC8oW8W4hgGEbTAkc00s-URR3osO16rttos/export?format=pdf" />
            </div>
        </div>
    </WunschFlamingoSection>
    <WunschFlamingoSection>
        <div class="section skills">
            <div class="header"><h2>My</h2><ShimmeringText text="Skillset" header-tag="h2" color="yellow" class="header-highlight"/></div>
            <SkillTree />
        </div>
    </WunschFlamingoSection>
    <WunschFlamingoSection>
        <div class="section portfolio">
            <h2>Portfolio</h2>
            <ShimmeringText text="Coming Soon!" header-tag="h1" color="cmy" />
        </div>
    </WunschFlamingoSection>
    <Wunsch />
  </div>
</template>

<script lang="ts" setup>
const resumePDF: Ref<PDFViewer | null> = ref(null);

function viewResume() {
    console.log("Viewing resume");
    resumePDF.value!.toggleVisibility();
}
</script>

<style lang="less" scoped>
.home {
    width: 100%;
}

.section .header {
    display: flex;
    justify-content: center;
    align-items: center;
}

.landing {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    padding: 0 10%;
    overflow-y: hidden;

    .background-lambda {
        translate: 0 -20%;
        font-size: 120vh;
        color: var(--base);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1000;
    }

    .left-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;

        h1 {
            color: var(--lavender);
            span {
                color: transparent;
                background: linear-gradient(-45deg,var(--lavender),var(--mauve));
                background-clip: text;
                -webkit-background-clip: text;
            }
        }

        .socials-bar {
            margin-top: 10px;
            height: 32px;
        }
    }

    .right-image {
        img {
            position: absolute;
            -o-object-fit: cover;
            object-fit: cover;
            -o-object-position: bottom;
            object-position: bottom;
            right: -70px;
            height: 100%;
            image-rendering: pixelated;
            top: 0;
            z-index: -1;
        }
    }
}

.about {
    background-color: var(--mantle);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60vh;
    padding: 0 2.5%;

    .left-image {
        width: 50%;
        height: 100%;
    }

    .right-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 75%;

        .about-header {
            display: flex;
            justify-content: center;
            align-items: center;
            
            .header-highlight :deep(h2) {
                margin-left: 0.25em;
                font-weight: 800;
            }
        }

        .resume-button {
            width: 10em;
        }
    }
}

.skills {
    background-color: var(--crust);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2.5% 10%;
}

.portfolio {
    background-color: var(--mantle);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    padding: 5% 10%;
}
</style>